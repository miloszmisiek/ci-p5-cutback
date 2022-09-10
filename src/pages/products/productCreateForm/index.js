import React from "react";
import { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  ActionBody,
  ActionButtonsWrapper,
  AddImageButton,
  AddProductButton,
  ButtonsWrapper,
  CreateCard,
  CreateColumn,
  FormControlMt,
  FormSwitch,
  LinkSpan,
  Thumbnails,
  TitleText,
  TitleWrapper,
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
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onSwitchAction = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <Form>
      <Row>
        <CreateColumn xs={12} md={6}>
          <CreateCard>
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/milo-milo/image/upload/v1658395557/default_post_iixybg.jpg"
            />
            <Thumbnails>
              <LinkSpan>Link</LinkSpan>
              <LinkSpan>Link</LinkSpan>
              <LinkSpan>Link</LinkSpan>
              <LinkSpan>Link</LinkSpan>
            </Thumbnails>

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
          <TitleWrapper>
            <TitleText>Title</TitleText>
            <TitleText>$ 0.00</TitleText>
          </TitleWrapper>
          <Form.Group controlId="categoriesSelect">
            <Form.Label className="d-none">Categories</Form.Label>
            <Form.Control as="select">
              <option disabled selected>
                Categories
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="currencySelect">
            <Form.Label className="d-none">Currency</Form.Label>
            <Form.Control as="select">
              <option disabled selected>
                Choose Currency
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Form.Control>
            <FormControlMt type="text" placeholder="Price" />
          </Form.Group>
          <Form.Group controlId="locationGroup">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Street Name" />
            <FormControlMt type="text" placeholder="City" />
            <FormControlMt type="text" placeholder="Country" />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} />
            <FormControlMt type="text" placeholder="Brand" />
          </Form.Group>
          <ButtonsWrapper>
            <AddProductButton variant="primary">Add product</AddProductButton>
          </ButtonsWrapper>
        </CreateColumn>
      </Row>
    </Form>
  );
};

export default ProductCreateForm;
