import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { NotFound, NotFoundRow } from "./styles";

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
        <NotFoundRow>
          <Col xs={12} md={6}>
            <NotFound>Page not found</NotFound>
          </Col>
        </NotFoundRow>
      )}
    </>
  );
};

export default PageNotFound;
