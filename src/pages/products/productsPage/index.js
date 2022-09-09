import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../productCard";

const ProductsPage = () => {
  return (
    <div>
      <Row>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </div>
  );
};

export default ProductsPage;
