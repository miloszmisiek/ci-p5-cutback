import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
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
  const [gallery, setGallery] = useState([]);
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.options("/products/");
        const countires = data.actions?.POST.country.choices;
        const currencies = data.actions?.POST.price_currency.choices;
        const categories = data.actions?.POST.category.choices;
        setChoices({ categories, currencies, countires });
      } catch (err) {
        console.log(err);
        // if (err.response?.status !== 401) {
        //     setErrors(err.response?.data);
        // }
      }
    };
    handleMount();
  }, []);

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      const newState = gallery.map((obj) => {
        if (obj === gallery[activeIndex]) {
          return URL.createObjectURL(event.target.files[0]);
        }
        return obj;
      });
      setGallery(newState);
    }
  };

  const handleImageUpload = (e) => {
    setGallery([...gallery, URL.createObjectURL(e.target.files[0])]);
  };

  const upload = (e) => {
    e.preventDefault();
    console.log(gallery);
  };

  const handleClick = (e) => {
    const activeIndex = e.target.getAttribute("data-index");
    setActiveIndex(activeIndex);
  };

  const onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setProductData({ ...productData, [e.target.name]: amount });
    }
  };

  return (
    <Form>
      <Row>
        <CreateColumn xs={12} md={6}>
          <CreateCard>
            <FormLabel htmlFor="image-change">
              <Figure>
                <Card.Img
                  variant="top"
                  src={
                    gallery[activeIndex]
                      ? gallery[activeIndex]
                      : "https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg"
                  }
                />
              </Figure>
            </FormLabel>
            <Form.File
              className="d-none"
              id="image-change"
              accept="image/*"
              onChange={handleChangeImage}
              disabled={!gallery.length}
              ref={imageInput}
            />
            <Thumbnails>
              {gallery.length > 0 &&
                gallery.map((item, i) => (
                  <img
                    key={i}
                    height={60}
                    data-index={i}
                    src={item}
                    onClick={handleClick}
                  />
                ))}
            </Thumbnails>

            {/* 
                TODO: get previews styled as thumbnails, 
                work on preview indexing with thumbnail (productGallery inspiration) 
            */}
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={upload}
            >
              Upload
            </button>
            <ActionBody>
              <FormSwitch
                onChange={onSwitchAction}
                id="custom-switch"
                label="In Stock"
                checked={isSwitchOn}
              />
              <FormLabel htmlFor="image-upload">
                <AddImageButton>
                  <i className="fas fa-plus"></i> Add image
                </AddImageButton>
              </FormLabel>
              <Form.File
                className="d-none"
                id="image-upload"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={gallery.length === 5}
                ref={imageInput}
              />
            </ActionBody>
          </CreateCard>
        </CreateColumn>
        <CreateColumn xs={12} md={6}>
          <Form.Group controlId="titlePriceSelect">
            <TitleWrapper title="true">
              <TransparentInput type="text" placeholder="Title" />
              <TitleWrapper>
                {currencies?.length ? (
                  <CurrencySelect as="select">
                    {currencies.map((currency, idx) => (
                      <option key={idx} value={currency.value}>
                        {currency.display_name}
                      </option>
                    ))}
                  </CurrencySelect>
                ) : (
                  <Asset spinner signin />
                )}
                <TransparentInput
                  type="text"
                  name="price"
                  value={price}
                  onChange={onAmountChange}
                  placeholder="0.00"
                  price="true"
                />
              </TitleWrapper>
            </TitleWrapper>
          </Form.Group>
          <Form.Group controlId="categoriesSelect">
            <Form.Label className="d-none">Categories</Form.Label>
            {categories?.length ? (
              <Form.Control as="select" defaultValue={""}>
                <option disabled value={""}>
                  Categories
                </option>
                {categories?.map((category, idx) => (
                  <option key={idx} value={category.value}>
                    {category.display_name}
                  </option>
                ))}
              </Form.Control>
            ) : (
              <Asset spinner signin />
            )}
          </Form.Group>
          <Form.Group controlId="locationGroup">
            <Form.Label>Location</Form.Label>
            <FormControlMb type="text" placeholder="Street Name" />
            <FormControlMb type="text" placeholder="City" />
            {countires?.length ? (
              <Form.Control as="select" defaultValue={""}>
                <option disabled value={""}>
                  Countires
                </option>
                {countires?.map((country, idx) => (
                  <option key={idx} value={country.value}>
                    {country.display_name}
                  </option>
                ))}
              </Form.Control>
            ) : (
              <Asset spinner signin />
            )}
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
