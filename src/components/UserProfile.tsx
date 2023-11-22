import UserInfo from 'components/UserInfo';
import UserImage from 'components/UserImage';
import useUser from 'hooks/useUser';
import ActionButton from 'components/ActionButton';

const UserProfile: React.FC = () => {
    const { userData, isLoading, fetchRandomUser, isFieldChanged } = useUser();
    return (
        <div className="relative max-w-md md:max-w-2xl h-fit min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    {userData && <UserImage src={userData.image} />}
                    <div className="w-full text-center mt-20">
                        {userData && (
                            <div className="flex flex-wrap justify-center  lg:pt-4 pt-8 pb-0">
                                <UserInfo
                                    label="First Name"
                                    value={userData.firstName}
                                    isChanged={!!isFieldChanged('firstName')}
                                />
                                <UserInfo
                                    label="Last Name"
                                    value={userData.lastName}
                                    isChanged={!!isFieldChanged('lastName')}
                                />
                                <UserInfo
                                    label="Country"
                                    value={userData.country}
                                    isChanged={!!isFieldChanged('country')}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                    <ActionButton onClick={fetchRandomUser} disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Generate New User'}
                    </ActionButton>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
