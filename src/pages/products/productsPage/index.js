import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { axiosReq } from "../../../api/axiosDefaults";
import ProductCard from "../productCard";
import { ReactPaginateStyled } from "./styles";

const ProductsPage = ({ itemsPerPage, filter = "", message }) => {
  const [results, setResults] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  console.log(currentItems);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/products/?${filter}`);
        setResults(data.results);
        setCurrentItems(data.results.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.results.length / itemsPerPage));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [itemOffset, itemsPerPage, filter]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % results.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Row>
        {currentItems?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Row>
      <ReactPaginateStyled
        nextLabel={<i className="fas fa-chevron-right"></i>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<i className="fas fa-chevron-left"></i>}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default ProductsPage;
