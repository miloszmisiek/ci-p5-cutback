import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Avatar from "../../components/avatar";
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

const ProductCard = () => {
  return (
    <Column xs={12} sm={6} md={4}>
      <CardWrapper>
        <CardHeader>
          <NavLink to="/">
            <UserContainer>
              <Avatar
                src={
                  "https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_profile_ymgggi.jpg"
                }
                height={40}
              />
              <div>Username</div>
            </UserContainer>
          </NavLink>
        </CardHeader>
        <Card.Img src="https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg" />
        <Card.Body>
          <CardTitle>
            <NavLink to="/">Product Title</NavLink>
          </CardTitle>
          <CardInfo>
            <RatingComponent>
              Rating <div>component</div>
            </RatingComponent>
            <PriceComponent>$ 0.00</PriceComponent>
          </CardInfo>
        </Card.Body>
      </CardWrapper>
    </Column>
  );
};

export default ProductCard;
