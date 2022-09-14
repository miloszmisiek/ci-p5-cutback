import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children, isShown, setIsShown }) => {
  const [show, setShow] = useState(true);
  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
      setIsShown(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isShown]);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If show is true this will be returned
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultPros = {
  variant: "warning",
};

export default Message;
