import React, { createContext, useContext, useState } from "react";

export const AlertContext = createContext();
export const SetAlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);
export const useSetAlertContext = () => useContext(SetAlertContext);
export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState({
    alertIsVisible: false,
    variant: "warning",
    children: "",
  });

  const handleShowAlert = (variant, children) => {
    setShowAlert({
      ...showAlert,
      alertIsVisible: true,
      variant: variant,
      children: children,
    });
  };

  return (
    <AlertContext.Provider value={showAlert}>
      <SetAlertContext.Provider value={{ setShowAlert, handleShowAlert }}>
        {children}
      </SetAlertContext.Provider>
    </AlertContext.Provider>
  );
};
