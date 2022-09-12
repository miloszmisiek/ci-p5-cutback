import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { AssetWrapper } from "./styles";

const Asset = ({ spinner, src, message, signin }) => {
  return (
    <AssetWrapper signin={signin}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </AssetWrapper>
  );
};

export default Asset;