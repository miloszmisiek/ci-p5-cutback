import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { AssetWrapper } from "./styles";

const Asset = ({ spinner, src, message }) => {
  return (
    <AssetWrapper className="p-4">
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </AssetWrapper>
  );
};

export default Asset;