import React from "react";
import { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  ActionBody,
  AddImageButton,
  CreateCard,
  CreateColumn,
  FormSwitch,
  LinkSpan,
  Thumbnails,
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
          <Form>
            <ActionBody>
              <FormSwitch
                onChange={onSwitchAction}
                id="custom-switch"
                label="In Stock"
                checked={isSwitchOn}
              />
              <AddImageButton><i className="fas fa-plus"></i> Add image</AddImageButton>
            </ActionBody>
          </Form>
        </CreateCard>
      </CreateColumn>
    </Row>
  );
};

export default ProductCreateForm;
