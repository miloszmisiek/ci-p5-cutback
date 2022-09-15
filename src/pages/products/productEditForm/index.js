import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import { useHistory, useParams } from "react-router";
import {
  AddProductButton,
  ButtonsWrapper,
  CreateColumn,
  CurrencySelect,
  FormControlMb,
  FormControlMt,
  TitleWrapper,
  TransparentInput,
} from "../productCreateForm/styles";
import ProductGallery from "../productGallery";
const ProductEditForm = () => {
  const [images, setImages] = useState([]);
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
    gallery: [],
  });
  const {
    category,
    country,
    title,
    description,
    price_currency,
    brand,
    price,
    street,
    city,
    in_stock,
    gallery,
  } = productData;
  const [choices, setChoices] = useState({
    categories: [],
    currencies: [],
    countires: [],
  });
  const { categories, currencies, countires } = choices;
  const history = useHistory();
  const { id } = useParams();

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
      }

      try {
        const { data } = await axiosReq.get(`/products/${id}/`);
        const {
          category,
          country,
          price_currency,
          title,
          description,
          brand,
          price,
          street,
          city,
          gallery,
          is_owner,
          in_stock,
        } = data;

        // console.log(data);
        // check if current user is post owner, else redirect to home page
        if (is_owner) {
          setProductData({
            category,
            country: country.code,
            price_currency,
            title,
            description,
            brand,
            price,
            street,
            city,
            is_owner,
            in_stock,
            gallery,
          });
          setImages(gallery);
        } else {
          history.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [history, id]);

  const handleImageSubmit = (history) => {
    const galleryFormData = new FormData();
    images.forEach(async (image) => {
      let blob = await fetch(image.image).then((r) => r.blob());
      galleryFormData.append("product", id);
      galleryFormData.append("image", blob, "image.jpg");

    //   for (var pair of galleryFormData.entries()) {
    //     console.log(pair[0], pair[1]);
    //   }
      try {
        await axiosRes.put(`/products/images/${image.id}/`, galleryFormData);
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
    // await axiosRes.delete(`/products/13/`);
    // await axiosRes.delete(`/products/14/`);
    // await axiosRes.delete(`/products/15/`);
    // await axiosRes.delete(`/products/16/`);
    const productFormData = new FormData();

    for (const property in productData) {
      productFormData.append(`${property}`, productData[property]);
    }
    try {
      await axiosRes.put(`/products/${id}/`, productFormData);
      history.push(`/products/${id}`);
      handleImageSubmit(history);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors({ ...errors, productErrors: err.response?.data });
      }
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

  const productFields = (
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
                value={price_currency || ""}
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
            value={category || ""}
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
            name="country"
            value={country || ""}
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
        <FormControlMt
          type="text"
          placeholder="Brand"
          name="brand"
          value={brand}
          onChange={handleChange}
        />
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
          gallery={images}
          setGallery={setImages}
          errors={errors}
          setErrors={setErrors}
        />
        {productFields}
      </Row>
    </Form>
  );
};

export default ProductEditForm;
