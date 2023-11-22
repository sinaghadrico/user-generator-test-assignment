import UserInfo from "components/UserInfo";
import UserImage from "components/UserImage";
import useUser from "hooks/useUser";

const App: React.FC = () => {
  const { userData, fetchRandomUser, isFieldChanged } = useUser();

  return (
    <div className="flex flex-col  w-full max-w-md p-5  mx-auto mt-8 bg-slate-700 rounded-lg">
      <h1 className="text-2xl text-white text-center font-bold mb-4">
        User Profile Genarator
      </h1>
      {userData && (
        <div className="flex gap-5 items-center">
          <UserImage src={userData.image} />
          <div className="flex flex-col">
            <UserInfo
              label="First Name"
              value={userData.firstName}
              isChanged={!!isFieldChanged("firstName")}
            />
            <UserInfo
              label="Last Name"
              value={userData.lastName}
              isChanged={!!isFieldChanged("lastName")}
            />
            <UserInfo
              label="Country"
              value={userData.country}
              isChanged={!!isFieldChanged("country")}
            />
          </div>
        </div>
      )}
      <button
        className=" bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg mt-4"
        onClick={fetchRandomUser}
      >
        Get New User
      </button>
    </div>
  );
};

export default App;
