import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import Avatar from "../../../components/avatar";
import { CarouselImg, CarouselStyled } from "../productsPage/styles";

import {
  CardHeader,
  CardInfo,
  CardTitle,
  CardWrapper,
  Column,
  PriceComponent,
  RatingComponent,
  UserContainer,
} from "./styles";

const ProductCard = (props) => {
  const [errors, setErrors] = useState({});
  const { profile_image, owner, gallery, title, price_currency_symbol, price } =
    props;

  return (
    <Column xs={12} sm={6} md={4}>
      <CardWrapper>
        <CardHeader>
          <NavLink to="/">
            <UserContainer>
              <Avatar src={profile_image} height={40} />
              <div>{owner}</div>
            </UserContainer>
          </NavLink>
        </CardHeader>
        {/* <Card.Img
          src={
            gallery
              ? gallery[0].image
              : "https://res.cloudinary.com/milo-milo/image/upload/v1663236405/default_gkffon.png"
          }
        /> */}
        <CarouselStyled interval={null}>
          {gallery.map((image) => (
            <Carousel.Item>
              <CarouselImg
                className="d-block w-100"
                src={image.image}
                alt="Product image"
                height={200}
              />
            </Carousel.Item>
          ))}
        </CarouselStyled>
        <Card.Body>
          <CardTitle>
            <NavLink to="/">{title}</NavLink>
          </CardTitle>
          <CardInfo>
            <RatingComponent>
              Rating <div>component</div>
            </RatingComponent>
            <PriceComponent>
              {price_currency_symbol} {price}
            </PriceComponent>
          </CardInfo>
        </Card.Body>
      </CardWrapper>
    </Column>
  );
};

export default ProductCard;
