interface UserImageProps {
  src: string;
}

const UserImage: React.FC<UserImageProps> = ({ src }) => (
  <div className="user-image overflow-hidden rounded-full w-24 h-24">
    <img
      className="w-full h-full object-cover transition-all duration-300 transform hover:scale-105"
      src={src}
      alt="User"
    />
  </div>
);

export default UserImage;
