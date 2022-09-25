import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { AssetWrapper, Img, Msg } from "./styles";

const Asset = ({ spinner, src, message, signin, height, productCard = false }) => {
  return (
    <AssetWrapper productCard={productCard} signin={signin}>
      {spinner && <Spinner animation="border" />}
      {src && <Img src={src} alt={message} height={height} productCard={productCard}/>}
      {message && <Msg className="mt-4">{message}</Msg>}
    </AssetWrapper>
  );
};

export default Asset;
