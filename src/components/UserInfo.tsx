interface UserInfoProps {
    label: string;
    value: string;
    isChanged: boolean;
}

const UserInfo: React.FC<UserInfoProps> = ({ label, value, isChanged }) => (
    <div className="p-3 text-center">
        <span className="text-xl font-bold block  tracking-wide text-slate-700">{label}</span>
        <span
            className={` text-sm  text-slate-40  ${
                isChanged ? 'underline transition-all duration-300 bg-highlight' : ''
            }`}
        >
            {value}
        </span>
    </div>
);

export default UserInfo;
