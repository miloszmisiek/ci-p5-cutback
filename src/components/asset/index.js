import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { AssetWrapper } from "./styles";

const Asset = ({ spinner, src, message, signin, height, productCard }) => {
  return (
    <AssetWrapper productCard={productCard} signin={signin}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} height={height} />}
      {message && <p className="mt-4">{message}</p>}
    </AssetWrapper>
  );
};

export default Asset;
