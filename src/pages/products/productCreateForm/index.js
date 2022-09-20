import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import { useHistory } from "react-router";
import {
  AddProductButton,
  ButtonsWrapper,
  CreateColumn,
  CurrencySelect,
  FormControlMb,
  FormControlMt,
  TitleWrapper,
  TransparentInput,
} from "./styles";
import ProductGallery from "../productGallery";
import { Brand, FormSwitch, InStockBrandWrapper } from "../productEditForm/styles";
const ProductCreateForm = () => {
  const [gallery, setGallery] = useState([]);
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
  const { title, description, brand, price, street, city, in_stock } = productData;
  const [choices, setChoices] = useState({
    categories: [],
    currencies: [],
    countires: [],
  });
  const { categories, currencies, countires } = choices;
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.options("/products/");
        const countires = data.actions?.POST.country.choices;
        const currencies = data.actions?.POST.price_currency.choices;
        const categories = data.actions?.POST.category.choices;
        setChoices({ categories, currencies, countires });
        setProductData((prev) => ({
          ...prev,
          price_currency: currencies[0].value,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, []);

  const handleImageSubmit = (history) => {
    const galleryFormData = new FormData();
    gallery.forEach(async (image) => {
      let blob = await fetch(image.image).then((r) => r.blob());
      const productId = history.location.pathname.slice(-2);
      galleryFormData.append("product", productId);
      galleryFormData.append("image", blob, "image.jpg");
      try {
        await axiosRes.post("/products/images/", galleryFormData);
      } catch (err) {
        if (err.response?.status !== 401) {
          setErrors({ ...errors, galleryErrors: err.response?.data });
        }
        // console.log(err.response.data);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productFormData = new FormData();

    for (const property in productData) {
      productFormData.append(`${property}`, productData[property]);
    }
    // for (var pair of productFormData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }
    try {
      const{data} = await axiosRes.post("/products/", productFormData);
      history.push(`/products/${data.id}`);
      handleImageSubmit(history);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors({ ...errors, productErrors: err.response?.data });
      }
      // console.log(err.response.data);
    }
  };

  const onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setProductData({ ...productData, [e.target.name]: amount });
    }
  };

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const onSwitchAction = (e) => {
    setProductData({ ...productData, [e.target.name]: !productData.in_stock });
  };

  const productFields = (
    <CreateColumn xs={12} md={6}>
      <Form.Group controlId="titlePriceSelect">
        <TitleWrapper title="true">
          <TransparentInput
            type="text"
            maxLength="15"
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
      <TitleWrapper>
        {errors.productErrors?.title?.map((message, idx) => (
          <Alert className="mr-auto" variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        {errors.productErrors?.price_currency?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        {errors.productErrors?.price?.map((message, idx) => (
          <Alert className="ml-auto" variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </TitleWrapper>
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
      {errors.productErrors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message === '"" is not a valid choice.'
            ? "Select a valid choice."
            : message}
        </Alert>
      ))}
      <Form.Group controlId="locationGroup">
        <Form.Label>Location</Form.Label>
        <FormControlMb
          type="text"
          placeholder="Street Name"
          name="street"
          value={street}
          onChange={handleChange}
        />
        {errors.productErrors?.street?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <FormControlMb
          type="text"
          placeholder="City"
          name="city"
          value={city}
          onChange={handleChange}
        />
        {errors.productErrors?.city?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
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
      {errors.productErrors?.country?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message === '"" is not a valid choice.'
            ? "Select a valid choice."
            : message}
        </Alert>
      ))}
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="description"
          value={description}
          onChange={handleChange}
        />
        {errors.productErrors?.description?.map((message, idx) => (
          <Alert className="mt-3" variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <InStockBrandWrapper>
          <Brand
            type="text"
            placeholder="Brand"
            name="brand"
            value={brand}
            onChange={handleChange}
          />
          <FormSwitch
            onChange={onSwitchAction}
            name="in_stock"
            id="custom-switch"
            label="In Stock"
            checked={in_stock}
            value={in_stock}
          />
        </InStockBrandWrapper>
      </Form.Group>
      {errors.productErrors?.brand?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <ButtonsWrapper>
        <AddProductButton variant="primary" type="submit">
          <i className="fas fa-plus"></i> Add product
        </AddProductButton>
      </ButtonsWrapper>
    </CreateColumn>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <ProductGallery
          productData={productData}
          setProductData={setProductData}
          gallery={gallery}
          setGallery={setGallery}
          errors={errors}
          setErrors={setErrors}
        />
        {productFields}
      </Row>
    </Form>
  );
};

export default ProductCreateForm;
