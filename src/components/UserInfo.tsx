interface UserInfoProps {
  label: string;
  value: string;
  isChanged: boolean;
}

const UserInfo: React.FC<UserInfoProps> = ({ label, value, isChanged }) => (
  <div className={`mb-2 flex  flex-row gap-2 items-center`}>
    <span className=" text-gray-400 ">{label}:</span>{" "}
    <span
      className={`${
        isChanged
          ? " text-yellow-200 underline transition-all duration-300"
          : " text-black"
      }`}
    >
      {value}
    </span>
  </div>
);

export default UserInfo;
