import React from "react";
import {
  useModalContext,
  useSetModalContext,
} from "../../contexts/ModalContext";
import { Button, Modal } from "react-bootstrap";

const ModalCustom = ({handleDelete, deleteItem}) => {
  const showModal = useModalContext();
  const { handleClose } = useSetModalContext();

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this {deleteItem}?
        <Button variant="danger" onClick={handleDelete}>
          Yes
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModalCustom;
