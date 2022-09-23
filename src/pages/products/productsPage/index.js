import React, { useEffect, useState } from "react";
import { axiosReq } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import ProductCard from "../productCard";
import { ProductsPageRow, ReactPaginateStyled } from "./styles";

const ProductsPage = ({ filter = "", message, heightCorrection }) => {
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
  }, [filter, inStock]);

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
          <ProductsPageRow heightCorrection={heightCorrection}>
            {results?.results.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ProductsPageRow>
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
