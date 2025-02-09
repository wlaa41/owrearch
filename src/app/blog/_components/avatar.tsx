import Image from "next/image";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="d-flex align-items-center"> {/* Flexbox for alignment */}
      <Image 
        src={picture}
        alt={name}
        width={44}
        height={44}
        className=""
      />
      <div className="ms-2"> 
        <p className="">{name}</p>
      </div>
    </div>
  );
};

export default Avatar;