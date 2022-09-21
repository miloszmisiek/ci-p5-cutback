import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import { FullRow } from "../../auth/signUpForm/styles";
import { CreateColumn } from "../productCreateForm/styles";
import ProductGallery from "../productGallery";
import { CreateCard } from "../productGallery/styles";
import { CarouselImg, CarouselStyled } from "../productsPage/styles";
import {
  Brand,
  BrandStock,
  CarouselImgProductPage,
  CarouselProductPage,
  ContactData,
  ContactInformation,
  Description,
  Divider,
  Price,
  ProductPageColumn,
  Title,
  TitleWrapper,
  Wrapper,
} from "./styles";

const ProductPage = () => {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
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
    country: "",
    gallery: [],
  });
  const { profile_id, owner, email, first_name, last_name, phone_number } = profile;
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
        } = data;

        const { id: profile_id, owner, email, first_name, last_name, phone_number } =
          owner_profile;

        setProductData({
          category,
          country: country.name,
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
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <FullRow>
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
      </CreateColumn>
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
            <i className="fas fa-map-marker"></i> Location
          </ContactInformation>
          <ContactData>
            <strong>Address: </strong>
            {street}
          </ContactData>
          <ContactData>
            <strong>City:</strong> {city}
          </ContactData>
          <ContactData>
            <strong>Country:</strong> {country}
          </ContactData>
        </Wrapper>
      </ProductPageColumn>
    </FullRow>
  );
};

export default ProductPage;
