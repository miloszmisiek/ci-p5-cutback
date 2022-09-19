import React from "react";
import {
  useModalContext,
  useSetModalContext,
} from "../../contexts/ModalContext";
import { Button, Modal } from "react-bootstrap";
import { ModalBody } from "./styles";

const ModalCustom = () => {
  const showModal = useModalContext();
  const { handleClose } = useSetModalContext();
  const { modalIsOpen, deleteItem, deleteFunc } = showModal;

  return (
    <Modal show={modalIsOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete {deleteItem}</Modal.Title>
      </Modal.Header>
      <ModalBody text="true">
        Are you sure you want to delete this {deleteItem}?
        <ModalBody>
          <Button variant="danger" onClick={deleteFunc}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </ModalBody>
      </ModalBody>
    </Modal>
  );
};

export default ModalCustom;
