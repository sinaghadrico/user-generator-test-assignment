interface UserImageProps {
    src: string;
}

const UserImage: React.FC<UserImageProps> = ({ src }) => (
    <div className="w-full flex justify-center">
        <div className="relative">
            <img
                src={src}
                alt="User"
                className="shadow-xl rounded-full align-middle border-2 border-black absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
            />
        </div>
    </div>
);

export default UserImage;
