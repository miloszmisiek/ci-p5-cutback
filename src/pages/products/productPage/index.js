import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import { FullRow } from "../../auth/signUpForm/styles";
import { CreateColumn } from "../productCreateForm/styles";
import StarRatings from "react-star-ratings";
import {
  BrandStock,
  CarouselImgProductPage,
  CarouselProductPage,
  ContactData,
  ContactInformation,
  CountryFlag,
  Description,
  Divider,
  Price,
  ProductAvgScore,
  ProductPageColumn,
  Rating,
  RatingsWrapper,
  Title,
  Wrapper,
} from "./styles";
import ReactCountryFlag from "react-country-flag";
import { RatingComponent } from "../productCard/styles";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";

const ProductPage = () => {
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const [errors, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [rating, setRating] = useState({
    rating_data: [],
    avg: 0,
    currentUserRating: null,
    scores: {},
  });

  const [profile, setProfile] = useState({
    profile_id: null,
    owner: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });
  const [productData, setProductData] = useState({
    category: "",
    title: "",
    description: "",
    brand: "",
    in_stock: false,
    price: "",
    price_currency: "",
    price_currency_symbol: "",
    street: "",
    city: "",
    country: {},
    gallery: [],
  });

  const { rating_data, avg, currentUserRating, scores } = rating;
  const { profile_id, owner, email, first_name, last_name, phone_number } =
    profile;
  const {
    category,
    country,
    title,
    description,
    price_currency,
    price_currency_symbol,
    brand,
    price,
    street,
    city,
    in_stock,
    gallery,
  } = productData;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/products/${id}/`);
        const {
          category,
          country,
          price_currency,
          price_currency_symbol,
          title,
          description,
          brand,
          price,
          street,
          city,
          gallery,
          in_stock,
          owner_profile,
          scores,
        } = data;

        const {
          id: profile_id,
          owner,
          email,
          first_name,
          last_name,
          phone_number,
        } = owner_profile;

        setProductData({
          category,
          country: country,
          price_currency,
          price_currency_symbol,
          title,
          description,
          brand,
          price,
          street,
          city,
          in_stock,
          gallery,
        });
        setProfile({
          profile_id,
          owner,
          email,
          first_name,
          last_name,
          phone_number,
        });
        setRating((prev) => ({
          ...prev,
          rating_data: scores?.data,
          avg: scores?.statistics?.avg,
          scores: scores?.statistics?.scores,
        }));
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id, currentUserRating]);

  const handleRating = async (newRating) => {
    try {
      await axiosRes.post(`/ratings/`, { product: id, score: newRating });
    } catch (err) {
      console.log(err);
    }
    setRating({ ...rating, currentUserRating: newRating });
  };

  const editCurrentUserRating = async (newRating) => {
    const currentUserRating = rating_data?.filter((rating) => rating.is_owner);
    try {
      await axiosRes.put(`ratings/${currentUserRating[0]?.id}`, {
        product: id,
        score: newRating,
      });
    } catch (err) {
      console.log(err);
    }
    setRating({ ...rating, currentUserRating: newRating })
  };

  const ratingProductPage = (
    <RatingsWrapper>
      <Rating>
        <ProductAvgScore>{parseFloat(avg).toFixed(1)}</ProductAvgScore>
        <StarRatings
          rating={avg}
          starHoverColor="green"
          starDimension="20px"
          starSpacing="2px"
          starEmptyColor="rgb(180,211,178)"
          starRatedColor="green"
          changeRating={
            !rating_data?.filter((rating) => rating.is_owner)
              ? currentUser && handleRating
              : editCurrentUserRating
          }
        />
      </Rating>
      <Divider />
      {Object.entries(scores).map((score) => (
        <Rating key={parseInt(score[0].split("star_")[1])} scores>
          <StarRatings
            rating={parseInt(score[0].split("star_")[1])}
            starDimension="20px"
            starSpacing="2px"
            starEmptyColor="rgb(180,211,178)"
            starRatedColor="green"
          />
          <ProductAvgScore>{score[1]}</ProductAvgScore>
        </Rating>
      ))}
    </RatingsWrapper>
  );
  const productPageTest = (
    <ProductPageColumn xs={12} md={5}>
      <Wrapper>
        <Price>
          {price_currency_symbol} {price}
        </Price>
        <Title>{title}</Title>
      </Wrapper>
      <Divider />
      <Wrapper>
        <BrandStock>{brand}</BrandStock>
        <Description>{description}</Description>
        {in_stock ? (
          <BrandStock available="true">Available</BrandStock>
        ) : (
          <BrandStock outOfStock="true">Out of stock</BrandStock>
        )}
      </Wrapper>
      <Divider />
      <Wrapper>
        <ContactInformation>
          <i className="far fa-id-card"></i> Contact Information
        </ContactInformation>
        <ContactData>
          <NavLink to={`/profile/${profile_id}`}>
            <i className="fas fa-user"></i>{" "}
          </NavLink>
          {first_name ? first_name : owner} {last_name ? last_name : null}
        </ContactData>
        {phone_number ? (
          <ContactData>
            <i className="fas fa-phone-alt"></i>
            {phone_number}
          </ContactData>
        ) : null}
        <ContactData>
          <a href={`mailto:${email}`} aria-label="Go to email page">
            <i className="fas fa-envelope"></i>
          </a>
          {email}
        </ContactData>
      </Wrapper>
      <Divider />
      <Wrapper>
        <ContactInformation>
          <i className="fas fa-map-pin"></i> Location
        </ContactInformation>
        <ContactData>
          <strong>Address: </strong>
          {street}
        </ContactData>
        <ContactData>
          <strong>City:</strong> {city}
        </ContactData>
        <ContactData>
          <strong>Country:</strong> {country.name}
          {<CountryFlag svg countryCode={country?.code} />}
        </ContactData>
      </Wrapper>
    </ProductPageColumn>
  );
  const carouselProductPage = (
    <CreateColumn xs={12} md={7}>
      <CarouselProductPage>
        {gallery?.map((image) => (
          <Carousel.Item key={image.id}>
            <CarouselImgProductPage
              className="d-block w-100"
              src={image.image}
              alt="Product image"
              height={300}
            />
          </Carousel.Item>
        ))}
      </CarouselProductPage>
      {ratingProductPage}
    </CreateColumn>
  );

  return (
    <>
      {hasLoaded && (
        <FullRow>
          {carouselProductPage}
          {productPageTest}
        </FullRow>
      )}
      ;
    </>
  );
};
export default ProductPage;
