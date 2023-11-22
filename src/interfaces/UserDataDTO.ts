export default interface UserDataDTO {
  name: {
    first: string;
    last: string;
  };
  location: {
    country: string;
  };
  picture: {
    large: string;
  };
}
