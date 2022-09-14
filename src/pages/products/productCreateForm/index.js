import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Alert, Card, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import { useHistory } from "react-router";
import Avatar from "../../../components/avatar";
import {
  ActionBody,
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
  ImagePreview,
  Thumbnail,
  Thumbnails,
  TitleWrapper,
  TransparentInput,
} from "./styles";
import Message from "../../../components/Alert";
const ProductCreateForm = () => {
  const [errors, setErrors] = useState({});
  const [productData, setProductData] = useState({
    category: "",
    title: "",
    description: "",
    brand: "",
    in_stock: false,
    price: "",
    price_currency: "",
    street: "",
    city: "",
    country: "",
  });
  const [gallery, setGallery] = useState([]);
  const { title, description, brand, in_stock, price, street, city } =
    productData;
  const [choices, setChoices] = useState({
    categories: [],
    currencies: [],
    countires: [],
  });
  const { categories, currencies, countires } = choices;
  const imageInput = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.options("/products/");
        const countires = data.actions?.POST.country.choices;
        const currencies = data.actions?.POST.price_currency.choices;
        const categories = data.actions?.POST.category.choices;
        setChoices({ categories, currencies, countires });
        setProductData({ ...productData, price_currency: currencies[0].value });
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
          return {
            ...obj,
            image: URL.createObjectURL(event.target.files[0]),
            product: 2,
          };
        }
        return obj;
      });
      setGallery(newState);
    }
  };

  const handleImageUpload = (e) => {
    setGallery([
      ...gallery,
      { product: "", image: URL.createObjectURL(e.target.files[0]) },
    ]);
    setActiveIndex(gallery.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productFormData = new FormData();
    const galleryFormData = new FormData();
    for (const property in productData) {
      productFormData.append(`${property}`, productData[property]);
    }
    try {
      const { data } = await axiosRes.post("/products/", productFormData);
      history.push(`/products/${data.id}`);
    } catch (err) {
      console.log(err.response.data);
      // if (err.response?.status !== 401) {
      //     setErrors(err.response?.data);
      // }
    }

    gallery.forEach(async (image) => {
      let blob = await fetch(image.image).then((r) => r.blob());
      const productId = history.location.pathname.slice(-2);
      galleryFormData.append("product", productId);
      galleryFormData.append("image", blob, "image.jpg");
      try {
        await axiosRes.post("/products/images/", galleryFormData);
      } catch (err) {
        console.log(err.response.data);
      }
    });
  };

  //   const handleClick = (e) => {
  //     setActiveIndex(e.target.dataset.index);
  //   };

  const onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setProductData({ ...productData, [e.target.name]: amount });
    }
  };

  const onSwitchAction = (e) => {
    setProductData({ ...productData, [e.target.name]: !in_stock });
  };

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };

  const handleError = (e) => {
    setErrors({
      ...errors,
      [e.target.dataset.name]: e.target.dataset.message,
    });
    setIsShown(!isShown);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <CreateColumn xs={12} md={6}>
          <CreateCard>
            <FormLabel htmlFor="image-change">
              <Figure>
                <ImagePreview
                  variant="top"
                  src={
                    gallery[activeIndex]
                      ? gallery[activeIndex].image
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
                  <Thumbnail
                    key={i}
                    className={
                      activeIndex === i ? "border border-dark" : "border-0"
                    }
                    height={60}
                    data-index={i}
                    src={item.image}
                    onClick={(e) => {
                      setActiveIndex(e.target.dataset.index);
                    }}
                  />
                ))}
            </Thumbnails>
            <ActionBody>
              <FormSwitch
                onChange={onSwitchAction}
                name="in_stock"
                id="custom-switch"
                label="In Stock"
                checked={in_stock}
                value={in_stock}
              />
              <FormLabel htmlFor="image-upload">
                <AddImageButton
                  disabled={errors.imagePreview}
                  data-name="imagePreview"
                  data-message={"Max. allowed images per product are 5"}
                  onClick={gallery.length === 5 ? handleError : undefined}
                >
                  {errors.imagePreview ? (
                    <i className="fas fa-times"></i>
                  ) : (
                    <i className="fas fa-plus"></i>
                  )}{" "}
                  Add image
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
            {isShown && (
              <Message
                variant={"warning"}
                children={errors.imagePreview}
                isShown={isShown}
                setIsShown={setIsShown}
              />
            )}
          </CreateCard>
        </CreateColumn>
        <CreateColumn xs={12} md={6}>
          <Form.Group controlId="titlePriceSelect">
            <TitleWrapper title="true">
              <TransparentInput
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleChange}
              />
              <TitleWrapper>
                {currencies?.length ? (
                  <CurrencySelect
                    as="select"
                    name="price_currency"
                    onChange={handleChange}
                  >
                    {currencies?.map((currency, idx) => (
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
              <Form.Control
                as="select"
                defaultValue={""}
                name="category"
                onChange={handleChange}
              >
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
            <FormControlMb
              type="text"
              placeholder="Street Name"
              name="street"
              value={street}
              onChange={handleChange}
            />
            <FormControlMb
              type="text"
              placeholder="City"
              name="city"
              value={city}
              onChange={handleChange}
            />
            {countires?.length ? (
              <Form.Control
                as="select"
                defaultValue={""}
                name="country"
                onChange={handleChange}
              >
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
            <Form.Control
              as="textarea"
              rows={5}
              name="description"
              value={description}
              onChange={handleChange}
            />
            <FormControlMt
              type="text"
              placeholder="Brand"
              name="brand"
              value={brand}
              onChange={handleChange}
            />
          </Form.Group>
          <ButtonsWrapper>
            <AddProductButton variant="primary" type="submit">
              <i className="fas fa-plus"></i> Add product
            </AddProductButton>
          </ButtonsWrapper>
        </CreateColumn>
      </Row>
    </Form>
  );
};

export default ProductCreateForm;
