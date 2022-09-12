import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Asset from "../../../components/asset";
import Avatar from "../../../components/avatar";
import {
  ActionBody,
  ActionButtonsWrapper,
  AddImageButton,
  AddProductButton,
  ButtonsWrapper,
  CreateCard,
  CreateColumn,
  CurrencySelect,
  Figure,
  FormControlMb,
  FormControlMt,
  FormLabel,
  FormSwitch,
  LinkSpan,
  PriceInput,
  Thumbnails,
  TitleText,
  TitleWrapper,
  TransparentInput,
} from "./styles";

const ProductCreateForm = () => {
  const [errors, setErrors] = useState({});
  const [productData, setProductData] = useState({
    category: [],
    title: "",
    description: "",
    brand: "",
    inStock: false,
    price: "",
    currency: [],
    street: "",
    city: "",
    country: "",
  });
  const [galleryData, setGalleryData] = useState({
    product: 0,
    image: "",
  });
  const { product, image } = galleryData;
  const {
    category,
    title,
    description,
    brand,
    inStock,
    price,
    currency,
    street,
    city,
    country,
  } = productData;
  const [choices, setChoices] = useState({
    categories: [],
    currencies: [],
    countires: [],
  });
  const { categories, currencies, countires } = choices;
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const imageInput = useRef(null);
  const onSwitchAction = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  useEffect(() => {
    const getOptions = async () => {
      try {
        const { data } = await axios.options("/products/");
        const countires = data.actions.POST.country.choices;
        const currencies = data.actions.POST.price_currency.choices;
        const categories = data.actions.POST.category.choices;
        setChoices({ categories, currencies, countires });
      } catch (err) {
        console.log(err);
        // if (err.response?.status !== 401) {
        //     setErrors(err.response?.data);
        // }
      }
    };
    getOptions();
  }, []);

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setGalleryData({
        ...galleryData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const thumbnails = (
    <Thumbnails>
      <Avatar
        height={60}
        src={
          image
            ? image
            : "https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg"
        }
      />
      <Avatar
        height={60}
        src={
          image
            ? image
            : "https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg"
        }
      />
      <Avatar
        height={60}
        src={
          image
            ? image
            : "https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg"
        }
      />
      <Avatar
        height={60}
        src={
          image
            ? image
            : "https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg"
        }
      />
    </Thumbnails>
  );

  return (
    <Form>
      <Row>
        <CreateColumn xs={12} md={6}>
          <CreateCard>
            <FormLabel htmlFor="image-upload">
              <Figure>
                <Card.Img
                  variant="top"
                  src={
                    image
                      ? image
                      : "https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg"
                  }
                />
              </Figure>
            </FormLabel>
            <Form.File
              className="d-none"
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              ref={imageInput}
            />
            {thumbnails}
            <ActionBody>
              <FormSwitch
                onChange={onSwitchAction}
                id="custom-switch"
                label="In Stock"
                checked={isSwitchOn}
              />
              <AddImageButton>
                <i className="fas fa-plus"></i> Add image
              </AddImageButton>
            </ActionBody>
          </CreateCard>
        </CreateColumn>
        <CreateColumn xs={12} md={6}>
          <Form.Group controlId="titlePriceSelect">
            <TitleWrapper title="true">
              <TransparentInput type="text" placeholder="Title" />
              <TitleWrapper>
                <CurrencySelect as="select">
                  {currencies?.map((currency, idx) => (
                    <option key={idx}>{currency.display_name}</option>
                  ))}
                </CurrencySelect>
                <TransparentInput
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  price="true"
                />
              </TitleWrapper>
            </TitleWrapper>
          </Form.Group>
          <Form.Group controlId="categoriesSelect">
            <Form.Label className="d-none">Categories</Form.Label>
            <Form.Control as="select">
              <option disabled selected>
                Categories
              </option>
              {categories?.map((category, idx) => (
                <option key={idx}>{category.display_name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="locationGroup">
            <Form.Label>Location</Form.Label>
            <FormControlMb type="text" placeholder="Street Name" />
            <FormControlMb type="text" placeholder="City" />
            <Form.Control as="select">
              <option disabled selected>
                Country
              </option>
              {countires?.map((country, idx) => (
                <option key={idx}>{country.display_name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} />
            <FormControlMt type="text" placeholder="Brand" />
          </Form.Group>
          <ButtonsWrapper>
            <AddProductButton variant="primary">
              <i className="fas fa-plus"></i> Add product
            </AddProductButton>
          </ButtonsWrapper>
        </CreateColumn>
      </Row>
    </Form>
  );
};

export default ProductCreateForm;
