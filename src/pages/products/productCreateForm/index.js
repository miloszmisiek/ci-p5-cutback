import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
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
  const [file, setFile] = useState([]);
  //   const { product, image } = galleryData;
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

  //   useEffect(() => {
  //     const handleGalleryUpdate = async () => {
  //       const { gallery } = await axiosReq.get();
  //     };
  //   }, []);

  //   const handleChangeImage = (event) => {
  //     if (event.target.files.length) {
  //       URL.revokeObjectURL(image);
  //       setGalleryData({
  //         ...galleryData,
  //         image: URL.createObjectURL(event.target.files[0]),
  //       });
  //     }
  //   };

  const handleImageUpload = (e) => {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
    console.log("file", file);
  };

  const upload = (e) => {
    e.preventDefault();
    console.log(file);
  };

  //   const thumbnails = (
  //     <Thumbnails>
  //       <Avatar
  //         height={60}
  //         src={
  //           image
  //             ? image
  //             : "https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg"
  //         }
  //       />
  //       <Avatar
  //         height={60}
  //         src={
  //           image
  //             ? image
  //             : "https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg"
  //         }
  //       />
  //       <Avatar
  //         height={60}
  //         src={
  //           image
  //             ? image
  //             : "https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg"
  //         }
  //       />
  //       <Avatar
  //         height={60}
  //         src={
  //           image
  //             ? image
  //             : "https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg"
  //         }
  //       />
  //     </Thumbnails>
  //   );

  return (
    <Form>
      <Row>
        <CreateColumn xs={12} md={6}>
          <CreateCard>
            <div>
              {file.length > 0 &&
                file.map((item, index) => {
                  return (
                    <div key={item}>
                      <img src={item} alt="" />
                    </div>
                  );
                })}
            </div>
            <div className="form-group">
              <input
                type="file"
                disabled={file.length === 5}
                className="form-control"
                onChange={handleImageUpload}
              />
            </div>
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
