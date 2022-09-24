// This code comes from Code Institute Moments Tutorial Video
import React from "react";
import { StyledAvatar } from "./styles.js";

const Avatar = ({ src, height = 45, text, shadow = false }) => {
  return (
    <span>
      <StyledAvatar
        src={src}
        height={height}
        width={height}
        alt="avatar"
        shadow={shadow}
      />
      {text}
    </span>
  );
};

export default Avatar;
