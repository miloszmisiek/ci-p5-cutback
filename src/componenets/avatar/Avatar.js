// This code comes from Code Institute Moments Tutorial Video
import React from "react";
import { StyledAvatar } from "./Avatar.styled";

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <StyledAvatar
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;