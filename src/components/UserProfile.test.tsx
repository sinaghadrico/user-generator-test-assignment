import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';
import '@testing-library/jest-dom';
const mockedFetch = jest.fn() as jest.Mock;
global.fetch = mockedFetch;

beforeEach(async () => {
    mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
            Promise.resolve({
                results: [
                    {
                        name: { first: 'Olivia', last: 'Jones' },
                        location: { country: 'USA' },
                        picture: { large: 'image-url' },
                    },
                ],
            }),
    });
});
afterEach(function () {
    jest.clearAllMocks();
});

describe('UserProfile component', () => {
    it('renders  loading', async () => {
        render(<UserProfile />);
        await waitFor(() => {
            expect(screen.queryByText('Loading...')).toBeInTheDocument();
        });
    });

    it('renders user information', async () => {
        await act(async () => {
            render(<UserProfile />);
        });

        // Wait for the initial user data to be loaded

        await waitFor(() => {
            expect(screen.queryByText('Loading...')).toBeNull();

            expect(screen.getByText('First Name')).toBeInTheDocument();
            expect(screen.getByText('First Name').closest('div')).toHaveTextContent('Olivia');

            expect(screen.getByText('Last Name')).toBeInTheDocument();
            expect(screen.getByText('Last Name').closest('div')).toHaveTextContent('Jones');

            expect(screen.getByText('Country')).toBeInTheDocument();
            expect(screen.getByText('Country').closest('div')).toHaveTextContent('USA');

            expect(screen.getByAltText('User Image')).toHaveAttribute('src', 'image-url');
        });

        // Assert that the "Generate New User" button is present
        expect(screen.getByText('Generate New User')).toBeInTheDocument();
    });

    it('generates new user on button click', async () => {
        await act(async () => {
            render(<UserProfile />);
        });

        await waitFor(() => {
            expect(screen.queryByText('Loading...')).toBeNull();

            expect(screen.getByText('First Name')).toBeInTheDocument();
            expect(screen.getByText('First Name').closest('div')).toHaveTextContent('Olivia');

            expect(screen.getByText('Last Name')).toBeInTheDocument();
            expect(screen.getByText('Last Name').closest('div')).toHaveTextContent('Jones');

            expect(screen.getByText('Country')).toBeInTheDocument();
            expect(screen.getByText('Country').closest('div')).toHaveTextContent('USA');

            expect(screen.getByAltText('User Image')).toHaveAttribute('src', 'image-url');
        });
        // Mock the fetch function to simulate a new user
        mockedFetch.mockResolvedValueOnce({
            ok: true,
            json: () =>
                Promise.resolve({
                    results: [
                        {
                            name: { first: 'Sijgje', last: 'Jones' },
                            location: { country: 'Canada' },
                            picture: { large: 'new-image-url' },
                        },
                    ],
                }),
        });
        act(() => {
            // Click the "Generate New User" button
            fireEvent.click(screen.getByText('Generate New User'));
        });
        expect(screen.getByText('Loading...')).toBeInTheDocument();

        // Wait for the new user data to be loaded
        await waitFor(
            async () => {
                expect(screen.queryByText('Loading...')).toBeNull();

                expect(screen.getByText('First Name')).toBeInTheDocument();
                expect(screen.getByText('First Name').closest('div')).toHaveTextContent('Sijgje');
                expect(screen.getByText('Sijgje')).toHaveClass('bg-highlight');

                expect(screen.getByText('Last Name')).toBeInTheDocument();
                expect(screen.getByText('Last Name').closest('div')).toHaveTextContent('Jones');
                expect(screen.getByText('Jones')).not.toHaveClass('bg-highlight');

                expect(screen.getByText('Country')).toBeInTheDocument();
                expect(screen.getByText('Country').closest('div')).toHaveTextContent('Canada');
                expect(screen.getByText('Canada')).toHaveClass('bg-highlight');

                expect(screen.getByAltText('User Image')).toHaveAttribute('src', 'new-image-url');
            },
            { timeout: 100 },
        );
    });
});
