import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import { useHistory, useParams } from "react-router";
import {
  AddProductButton,
  CreateColumn,
  CurrencySelect,
  FormControlMb,
  TitleWrapper,
  TransparentInput,
} from "../productCreateForm/styles";
import ProductGallery from "../productGallery";
import {
  Brand,
  EditButtonsWrapper,
  FormSwitch,
  InStockBrandWrapper,
  ProductDeleteButton,
} from "./styles";
import ModalCustom from "../../../components/modal";
import { useSetModalContext } from "../../../contexts/ModalContext";
import { useCategories } from "../../../contexts/CategoriesContext";
const ProductEditForm = () => {
  const [images, setImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
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
  } = productData;
  const [choices, setChoices] = useState({
    currencies: [],
    countires: [],
  });
  const { currencies, countires } = choices;
  const categories = useCategories();
  const history = useHistory();
  const { id } = useParams();
  const { handleClose, handleShow } = useSetModalContext();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.options("/products/");
        const countires = data.actions?.POST.country.choices;
        const currencies = data.actions?.POST.price_currency.choices;
        setChoices({ currencies, countires });
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
          owner_profile,
          in_stock,
        } = data;

        // console.log(data);
        // check if current user is post owner, else redirect to home page
        if (owner_profile.is_owner) {
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

  const handleImageSubmit = () => {
    const galleryFormData = new FormData();

    deletedImages.forEach(async (image) => {
      if (image.id) {
        console.log("deleted image >>> ", image);
        try {
          await axiosReq.delete(`/products/images/${image.id}/`);
        } catch (err) {
          console.log(err);
        }
      }
    });

    images.forEach(async (image) => {
      let blob = await fetch(image.image).then((r) => r.blob());
      galleryFormData.append("product", id);
      galleryFormData.append("image", blob, "image.jpg");

      //   for (var pair of galleryFormData.entries()) {
      //     console.log(pair[0], pair[1]);
      //   }
      try {
        if (image.id) {
          console.log("image to put >>> ", image);
          await axiosRes.put(`/products/images/${image.id}/`, galleryFormData);
        } else {
          console.log("image to post >>> ", image);
          await axiosRes.post("/products/images/", galleryFormData);
        }
        // image.id
        //   ? await axiosRes.put(`/products/images/${image.id}/`, galleryFormData)
        //   : await axiosRes.post("/products/images/", galleryFormData);
        // ? console.log("image to put >>> ", image)
        // : console.log("image to post >>> ", image);
      } catch (err) {
        if (err.response?.status !== 401) {
          setErrors({ ...errors, galleryErrors: err.response?.data });
        }
        console.log(err.response.data);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productFormData = new FormData();

    for (const property in productData) {
      productFormData.append(`${property}`, productData[property]);
    }
    try {
      await axiosRes.put(`/products/${id}/`, productFormData);
      history.push(`/products/${id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors({ ...errors, productErrors: err.response?.data });
      }
    }
    handleImageSubmit();
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

  const handleProductDelete = async () => {
    try {
      await axiosRes.delete(`/products/${id}`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
    handleClose();
  };

  const productFields = (
    <CreateColumn xs={12} md={6}>
      <Form.Group controlId="titlePriceSelect">
        <TitleWrapper title="true">
          <TransparentInput
            type="text"
            maxLength="30"
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
      <EditButtonsWrapper>
        <AddProductButton variant="primary" type="submit">
          <i className="fas fa-save"></i> Save
        </AddProductButton>

        <ProductDeleteButton
          onClick={() => handleShow("product", handleProductDelete)}
        >
          <i className="fas fa-trash-alt"></i> Delete
        </ProductDeleteButton>
      </EditButtonsWrapper>
    </CreateColumn>
  );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <ModalCustom handleDelete={handleProductDelete} deleteItem="product" />
        <Row>
          <ProductGallery
            gallery={images}
            setGallery={setImages}
            errors={errors}
            setErrors={setErrors}
            deletedImages={deletedImages}
            setDeletedImages={setDeletedImages}
          />
          {productFields}
        </Row>
      </Form>
    </>
  );
};

export default ProductEditForm;
