import UserData from "interfaces/UserData";
import UserDataDTO from "interfaces/UserDataDTO";

const userMapper = (data: UserDataDTO): UserData => {
  const item = {
    firstName: data.name.first,
    lastName: data.name.last,
    country: data.location.country,
    image: data.picture.large,
  };
  return item;
};

export default userMapper;
