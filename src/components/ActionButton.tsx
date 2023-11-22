import type { ButtonHTMLAttributes } from 'react';
interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const ActionButton: React.FC<ActionButtonProps> = ({ children, ...restProps }) => (
    <button
        {...restProps}
        className=" text-white min-w-[190px] hover:text-black font-bold py-2 px-4 rounded-lg bg-black hover:bg-transparent border-2 border-black "
    >
        {children}
    </button>
);

export default ActionButton;
