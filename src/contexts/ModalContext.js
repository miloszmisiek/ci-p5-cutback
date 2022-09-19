import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();
export const SetModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);
export const useSetModalContext = () => useContext(SetModalContext);

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState({
    modalIsOpen: false,
    deleteItem: "",
    deleteFunc: null,
  });
  const handleClose = () => {
    setShowModal({ ...showModal, modalIsOpen: false });
  };
  const handleShow = (deleteItem, deleteFunc) => {
    setShowModal({ ...showModal, modalIsOpen: true, deleteItem: deleteItem, deleteFunc: deleteFunc});
  };

  return (
    <ModalContext.Provider value={showModal}>
      <SetModalContext.Provider
        value={{ setShowModal, handleClose, handleShow }}
      >
        {children}
      </SetModalContext.Provider>
    </ModalContext.Provider>
  );
};
