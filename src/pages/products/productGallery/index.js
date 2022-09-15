import React, { useRef, useState } from "react";
import {
  ActionBody,
  AddImageButton,
  CreateCard,
  CreateColumn,
  Figure,
  FormLabel,
  FormSwitch,
  ImagePreview,
  OverlayContainer,
  OverlayText,
  Thumbnail,
  Thumbnails,
} from "./styles";
import Message from "../../../components/Alert";
import { Alert, Form } from "react-bootstrap";
import Asset from "../../../components/asset";

const ProductGallery = ({
  productData,
  setProductData,
  gallery,
  setGallery,
  errors,
  setErrors,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const imageInput = useRef(null);

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

  const onSwitchAction = (e) => {
    setProductData({ ...productData, [e.target.name]: !productData.in_stock });
  };

  const handleError = (e) => {
    setErrors({
      ...errors,
      [e.target.dataset.name]: e.target.dataset.message,
    });
    setIsShown(!isShown);
  };

  return (
    <CreateColumn xs={12} md={6}>
      <CreateCard>
        <FormLabel htmlFor="image-change">
          <Figure disabled={gallery[activeIndex] ? false : true}>
            {gallery.length > 0 && (
              <OverlayContainer><OverlayText>Click on image to change.</OverlayText></OverlayContainer>
            )}
            {gallery[activeIndex] ? (
              <ImagePreview variant="top" src={gallery[activeIndex].image} />
            ) : (
              <Asset
                src={
                  "https://res.cloudinary.com/milo-milo/image/upload/v1663236405/default_gkffon.png"
                }
              />
            )}
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
            checked={productData.in_stock}
            value={productData.in_stock}
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
        {errors.productErrors?.in_stock?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </CreateCard>
    </CreateColumn>
  );
};

export default ProductGallery;
