import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();
export const SetModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);
export const useSetModalContext = () => useContext(SetModalContext);

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    console.log("show");
  };
  const handleShow = () => {
    setShowModal(true);
    console.log("show");
  };

  return (
    <ModalContext.Provider value={showModal}>
      <SetModalContext.Provider value={{setShowModal, handleClose, handleShow}}>
        {children}
      </SetModalContext.Provider>
    </ModalContext.Provider>
  );
};
