import { useEffect } from "react";
import {
  useAlertContext,
  useSetAlertContext,
} from "../../contexts/AlertContext";
import { AlertCustom } from "./styles";

const Message = () => {
  const showAlert = useAlertContext();
  const { setShowAlert } = useSetAlertContext();
  const { alertIsVisible, variant, children } = showAlert;
  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShowAlert({ ...showAlert, alertIsVisible: false });
    }, 5000);
    return () => {
      clearTimeout(timeId);
    };
  }, [alertIsVisible, showAlert, setShowAlert]);

  // If show is false the component will return null and stop here
  if (!alertIsVisible) {
    return null;
  }

  // If show is true this will be returned
  return <AlertCustom variant={variant}>{children}</AlertCustom>;
};

export default Message;
