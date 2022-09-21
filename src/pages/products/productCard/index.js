import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import Avatar from "../../../components/avatar";
import { CarouselImg, CarouselStyled } from "../productsPage/styles";
import StarRatings from "react-star-ratings";

import {
  AvgScore,
  CardBody,
  CardHeader,
  CardInfo,
  CardTitle,
  CardWrapper,
  Column,
  NavLinkProduct,
  PriceComponent,
  RatingComponent,
  StarRatingsCustom,
  UserContainer,
  Username,
} from "./styles";

const ProductCard = (props) => {
  const [errors, setErrors] = useState({});
  const {
    id,
    owner_profile,
    gallery,
    title,
    price_currency_symbol,
    price,
    scores,
  } = props;

  return (
    <Column xs={12} sm={6} md={4}>
      <CardWrapper>
        <CardHeader>
          <NavLink to={`/profiles/${owner_profile.id}/`}>
            <UserContainer>
              <Avatar src={owner_profile.image} height={40} />
              <Username>{owner_profile.owner}</Username>
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
            <Carousel.Item key={image.id}>
              <CarouselImg
                className="d-block w-100"
                src={image.image}
                alt="Product image"
                height={200}
              />
            </Carousel.Item>
          ))}
        </CarouselStyled>
        <CardBody>
          <CardTitle>
            <NavLinkProduct to={`/products/${id}/`}>{title}</NavLinkProduct>
          </CardTitle>
          {/* <CardInfo> */}
          <PriceComponent>
            {price_currency_symbol} {price}
          </PriceComponent>
          <RatingComponent>
            <AvgScore>2.4</AvgScore>
            <StarRatings
              rating={2.403}
              starDimension="20px"
              starSpacing="2px"
              starEmptyColor="rgb(180,211,178)"
              starRatedColor="green"
            />
          </RatingComponent>
          {/* </CardInfo> */}
        </CardBody>
      </CardWrapper>
    </Column>
  );
};

export default ProductCard;
