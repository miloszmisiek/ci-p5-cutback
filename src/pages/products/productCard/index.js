import React from "react";
import { Carousel } from "react-bootstrap";
import { CarouselImg, CarouselStyled } from "../productsPage/styles";
import StarRatings from "react-star-ratings";
import {
  AvgScore,
  CardBody,
  CardTitle,
  CardWrapper,
  Column,
  Counters,
  NavLinkProduct,
  PriceComponent,
  ProductCardDivider,
  RatingComponent,
} from "./styles";
import Asset from "../../../components/asset";

const ProductCard = (props) => {
  const {
    id,
    gallery,
    title,
    price,
    scores,
    comments_count,
    in_stock,
  } = props;
  return (
    <Column xs={12} sm={6} md={4}>
      <CardWrapper>
        {!in_stock && (
          <Asset
            outofstock={true}
            src="https://res.cloudinary.com/milo-milo/image/upload/v1664225168/dlf.pt-in-stock-png-3279008_ownkpl.png"
            height={100}
          />
        )}
        {gallery.length > 1 ? (
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
        ) : !!gallery.length ? (
          <Asset src={gallery[0]?.image} height={200} productCard />
        ) : (
          <Asset
            src="https://res.cloudinary.com/milo-milo/image/upload/v1663236405/default_gkffon.png"
            height={200}
            productCard
          />
        )}
        <CardBody>
          <CardTitle>
            <NavLinkProduct to={`/products/${id}/`}>{title}</NavLinkProduct>
          </CardTitle>
          <ProductCardDivider />
          <PriceComponent>&#8364; {price}</PriceComponent>
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
          <Counters>
            {scores.statistics?.all_scores}
            {scores.statistics?.all_scores !== 1
              ? " ratings"
              : " rating"} and {comments_count}
            {comments_count !== 1 ? " reviews" : " review"}
          </Counters>
        </CardBody>
      </CardWrapper>
    </Column>
  );
};

export default ProductCard;
