import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { axiosReq } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import ProductCard from "../productCard";
import { ReactPaginateStyled } from "./styles";
import ReactPaginate from "react-paginate";
import { fetchMoreData } from "../../../utils/utils";

const ProductsPage = ({ filter = "", message }) => {
  const [results, setResults] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [inStock, setInStock] = useState("");

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          `/products/?in_stock=${inStock}&${filter}`
        );
        setResults(data);
        setPageCount(
          !!data.next ? Math.ceil(data?.count / data?.results?.length) : 0
        );
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [filter]);

  const handlePageClick = async (e) => {
    try {
      const { data } = await axiosReq.get(
        `/products/?page=${e.selected + 1}&in_stock=${inStock}&${filter}`
      );
      setResults(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {hasLoaded ? (
        <>
          <Row>
            {results?.results.map((product) => (
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
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default ProductsPage;
