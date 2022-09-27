import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { FullRow } from "../auth/signUpForm/styles";
import { NotFound } from "./styles";

const PageNotFound = ({ setBackground }) => {
  useEffect(() => {
    setBackground({ notFound: true });
    return () => {
      setBackground(null);
    };
  }, [setBackground]);
  return (
    <FullRow>
      <Col xs={12} md={6}>
        <NotFound>404 not found</NotFound>
      </Col>
    </FullRow>
  );
};

export default PageNotFound;
