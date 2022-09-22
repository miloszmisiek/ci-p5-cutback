import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Avatar from "../../../components/avatar";
import { CarouselImg, CarouselStyled } from "../productsPage/styles";
import StarRatings from "react-star-ratings";
import {
  AvgScore,
  CardBody,
  CardHeader,
  CardTitle,
  CardWrapper,
  Column,
  NavLinkProduct,
  PriceComponent,
  RatingComponent,
  UserContainer,
  Username,
} from "./styles";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";

const ProductCard = (props) => {
  const [errors, setErrors] = useState({});
  const currentUser = useCurrentUser();
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
          <PriceComponent>
            {price_currency_symbol} {price}
          </PriceComponent>
          <RatingComponent>
            <AvgScore>{parseFloat(scores?.statistics.avg).toFixed(1)}</AvgScore>
            <StarRatings
              rating={scores?.statistics.avg}
              starDimension="20px"
              starSpacing="2px"
              starEmptyColor="rgb(180,211,178)"
              starRatedColor="green"
            />
          </RatingComponent>
        </CardBody>
      </CardWrapper>
    </Column>
  );
};

export default ProductCard;
