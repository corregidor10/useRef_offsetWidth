import React from "react";
import profileImage from "../../assets/profile-generic.png";
import { AvatarStyle } from "./avatar.jss";

interface IAvatarProps {
  size: string;
  name?: string;
  src?: string;
}

export const Avatar: React.FC<IAvatarProps> = ({ name, size, src }) => {
  const image = src ? src : profileImage;

  const style = AvatarStyle({ size });

  return (
    <>
      <div className={style.content}>
        <img className={style.avatar} src={image} alt={name} />
      </div>
    </>
  );
};
