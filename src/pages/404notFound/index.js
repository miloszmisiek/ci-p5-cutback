import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { FullRow } from "../auth/signUpForm/styles";
import { NotFound } from "./styles";

const PageNotFound = ({ setBackground }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setBackground({ notFound: true });
      setHasLoaded(true);
    }, 300);
    return () => {
      setBackground(null);
      clearTimeout(timer);
    };
  }, [setBackground, hasLoaded]);
  return (
    <>
      {hasLoaded && (
        <FullRow>
          <Col xs={12} md={6}>
            <NotFound>404 not found</NotFound>
          </Col>
        </FullRow>
      )}
    </>
  );
};

export default PageNotFound;
