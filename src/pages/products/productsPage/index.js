import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { axiosReq } from "../../../api/axiosDefaults";
import ProductCard from "../productCard";

const ProductsPage = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/products/`);
        setResults(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, []);
  return (
      <Row>
        {results.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Row>
  );
};

export default ProductsPage;
