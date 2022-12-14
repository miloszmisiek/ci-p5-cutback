import React, { useState } from "react";
import {
  ActionBody,
  AddImageButton,
  CreateCard,
  CreateColumn,
  DeleteImageButton,
  Figure,
  FormLabel,
  ImagePreview,
  OverlayContainer,
  OverlayText,
  Thumbnail,
  Thumbnails,
} from "./styles";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Asset from "../../../components/asset";
import { useSetModalContext } from "../../../contexts/ModalContext";
import { useSetAlertContext } from "../../../contexts/AlertContext";

const ProductGallery = ({
  gallery,
  setGallery,
  errors,
  setErrors,
  deletedImages,
  setDeletedImages,
  hasLoaded,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { handleClose, handleShow } = useSetModalContext();
  const { handleShowAlert } = useSetAlertContext();

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      const newState = gallery.map((obj) => {
        if (obj === gallery[activeIndex]) {
          return {
            ...obj,
            image: URL.createObjectURL(event.target.files[0]),
          };
        }
        return obj;
      });
      setGallery(newState);
    }
  };

  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setGallery([
        ...gallery,
        { product: "", image: URL.createObjectURL(e.target.files[0]) },
      ]);
      setActiveIndex(gallery.length);
    }
  };

  const handleImageDelete = () => {
    gallery.forEach((item, index) => {
      if (index === activeIndex && item.id) {
        setDeletedImages([...deletedImages, item]);
      }
    });
    const s = gallery.filter((item, index) => index !== activeIndex);
    setGallery(s);
    setActiveIndex(gallery.length - 2);
    handleClose();
  };

  const handleError = (e) => {
    setErrors({
      ...errors,
      [e.target.dataset.name]: e.target.dataset.message,
    });
    handleShowAlert("warning", "Max. allowed images per product are 5");
  };

  return (
    <CreateColumn xs={12} md={6}>
      {hasLoaded ? (
        <>
          <CreateCard>
            <FormLabel htmlFor="image-change">
              <Figure disabled={gallery[activeIndex] ? false : true}>
                {gallery.length > 0 && (
                  <OverlayContainer>
                    <OverlayText>Click the image to change.</OverlayText>
                  </OverlayContainer>
                )}
                {gallery[activeIndex] ? (
                  <ImagePreview
                    variant="top"
                    src={gallery[activeIndex].image}
                  />
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
              disabled={gallery.length <= 0}
            />
            <Thumbnails>
              {gallery.length > 0 &&
                gallery?.map((item, i) => (
                  <Thumbnail
                    key={i}
                    height={60}
                    data-index={i}
                    src={item?.image}
                    onClick={(e) => {
                      setActiveIndex(parseInt(e.target.dataset.index));
                    }}
                  />
                ))}
            </Thumbnails>
            {errors.productErrors?.in_stock?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </CreateCard>
          <ActionBody>
            <FormLabel htmlFor="image-upload">
              <AddImageButton
                disabled={gallery.length >= 5}
                data-name="imagePreview"
                data-message={"Max. allowed images per product are 5"}
                onClick={gallery.length >= 5 ? handleError : null}
              >
                {gallery.length >= 5 ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-plus"></i>
                )}{" "}
              </AddImageButton>
            </FormLabel>
            <Form.File
              className="d-none"
              id="image-upload"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={gallery.length === 5}
            />
            {gallery.length > 0 && (
              <DeleteImageButton
                disabled={errors.imagePreview}
                data-name="imagePreview"
                data-message={"Max. allowed images per product are 5"}
                onClick={() => handleShow("image", handleImageDelete)}
              >
                <i className="fas fa-minus"></i>
              </DeleteImageButton>
            )}
          </ActionBody>
        </>
      ) : (
        <Asset spinner />
      )}
    </CreateColumn>
  );
};

export default ProductGallery;
