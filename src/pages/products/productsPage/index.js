import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import {
  useQueryContext,
  useSetQueryContext,
} from "../../../contexts/QueryContext";
import ProductCard from "../productCard";
import {
  AllProductsButton,
  AllProductsContainer,
  FilterContainer,
  FilterInStock,
  FiltersCountry,
  FiltersDivide,
  FiltersExpanded,
  FiltersForm,
  FiltersRow,
  FiltersTitle,
  FormGroup,
  FormLabel,
  ProductsPageRow,
  ReactPaginateStyled,
} from "./styles";

const ProductsPage = ({
  filter = "",
  message,
  heightcorrection,
  visible = "true",
}) => {
  const [results, setResults] = useState([]);
  const [productCountries, setProductCountries] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [inStock, setInStock] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [ordering, setOrdering] = useState("");
  const [filterSet, setFilterSet] = useState("");
  const { query } = useQueryContext();
  const { queryLoaded } = useQueryContext();
  const { setQueryLoaded } = useSetQueryContext();
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: filtered }, { data: all }] = await Promise.all([
          axiosReq.get(
            `/products/?in_stock=${
              inStock ? inStock : ""
            }&${filter}&ordering=${ordering}&country=${filterSet}&search=${query}`
          ),
          axiosReq.get("/products"),
        ]);
        setProductCountries(
          all.results
            ?.map((product) => product.country)
            .filter(
              (country, index, array) =>
                array.findIndex(
                  (c) => c.code === country.code && c.name === country.name
                ) === index
            )
            .sort((a, b) => a.name.localeCompare(b.name))
        );

        // if (ordering === "-price") {
        //   const newFiltered = {
        //     ...filtered,
        //     results: filtered.results
        //       ?.map((obj) => ({
        //         ...obj,
        //         price_euro: ConvertCurrency(
        //           obj.price_currency,
        //           parseFloat(obj.price)
        //         ),
        //       }))
        //       .sort(
        //         (a, b) => parseFloat(b.price_euro) - parseFloat(a.price_euro)
        //       ),
        //   };
        //   setResults(newFiltered);
        // } else if (ordering === "price") {
        //   const newFiltered = {
        //     ...filtered,
        //     results: filtered.results
        //       ?.map((obj) => ({
        //         ...obj,
        //         price_euro: ConvertCurrency(
        //           obj.price_currency,
        //           parseFloat(obj.price)
        //         ),
        //       }))
        //       .sort((a, b) =>
        //         parseFloat(a.price_euro - parseFloat(b.price_euro))
        //       ),
        //   };
        //   setResults(newFiltered);
        // } else {
        //   setResults(filtered);
        // }
        setResults(filtered);
        setPageCount(
          !!filtered.next
            ? Math.ceil(filtered?.count / filtered?.results?.length)
            : 0
        );
        setHasLoaded(true);
        setQueryLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    const timer = setTimeout(() => {
      handleMount();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [
    filter,
    inStock,
    hasLoaded,
    ordering,
    filterSet,
    query,
    history,
    setQueryLoaded,
  ]);

  const handlePageClick = async (e) => {
    window.scrollTo(0, 0);
    try {
      const { data } = await axiosReq.get(
        `/products/?page=${e.selected + 1}&in_stock=${
          inStock ? inStock : ""
        }&${filter}&ordering=${ordering}&country=${filterSet}&search=${query}`
      );
      // if (ordering === "-price") {
      //   const newFiltered = {
      //     ...data,
      //     results: data.results
      //       ?.map((obj) => ({
      //         ...obj,
      //         price_euro: ConvertCurrency(
      //           obj.price_currency,
      //           parseFloat(obj.price)
      //         ),
      //       }))
      //       .sort(
      //         (a, b) => parseFloat(b.price_euro) - parseFloat(a.price_euro)
      //       ),
      //   };
      //   setResults(newFiltered);
      // } else if (ordering === "price") {
      //   const newFiltered = {
      //     ...data,
      //     results: data.results
      //       ?.map((obj) => ({
      //         ...obj,
      //         price_euro: ConvertCurrency(
      //           obj.price_currency,
      //           parseFloat(obj.price)
      //         ),
      //       }))
      //       .sort((a, b) =>
      //         parseFloat(a.price_euro - parseFloat(b.price_euro))
      //       ),
      //   };
      //   setResults(newFiltered);
      // } else {
      //   setResults(data);
      // }
      // setPageCount(
      //   !!data.next ? Math.ceil(data?.count / data?.results?.length) : 0
      // );
      setResults(data);
    } catch (err) {
      // console.log(err);
    }
  };

  const handleChange = (e) => {
    setFilterSet(e.target.value);
    setHasLoaded(false);
  };

  return (
    <>
      {/* {hasLoaded ? (
        <> */}
      <FiltersRow visible={visible}>
        <FiltersForm>
          <FilterContainer>
            <FiltersTitle onClick={() => setExpanded((prev) => !prev)}>
              Filters <i className="fas fa-tools pl-2"></i>
            </FiltersTitle>
            <FiltersExpanded expanded={expanded}>
              <FilterInStock
                onChange={() => {
                  setInStock((prev) => !prev);
                  setHasLoaded(false);
                }}
                name="in_stock"
                id="custom-switch"
                label="In Stock"
                checked={inStock}
                value={inStock}
              />
              <AllProductsContainer select="true">
                <AllProductsButton
                  onClick={(e) => {
                    e.preventDefault();
                    setInStock("");
                    setFilterSet("");
                    setHasLoaded(false);
                  }}
                >
                  Show All
                </AllProductsButton>
                <FormGroup>
                  <FormLabel>Country</FormLabel>
                  <FiltersCountry
                    as="select"
                    value={filterSet}
                    name="country"
                    onChange={handleChange}
                  >
                    <option value={""}>All</option>
                    <option disabled>──────────</option>
                    {productCountries?.map((country, idx) => (
                      <option key={idx} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </FiltersCountry>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Sorting</FormLabel>
                  <FiltersCountry
                    as="select"
                    defaultValue={"-created_at"}
                    name="ordering"
                    onChange={(e) => {
                      setOrdering(e.target.value);
                      setHasLoaded(false);
                    }}
                  >
                    <optgroup label={`Ascending \u25b2`}>
                      <option value="created_at">Created &#9650;</option>
                      <option value="price">Price &#9650;</option>
                      <option value="title">Title &#9650;</option>
                      <option value="avg_score">Avg rating &#9650;</option>
                      <option value="all_scores">All ratings &#9650;</option>
                    </optgroup>
                    <option disabled>──────────</option>
                    <optgroup label={`Descending \u25bc`}>
                      <option value="-created_at">Created &#9660;</option>
                      <option value="-price">Price &#9660;</option>
                      <option value="-title">Title &#9660;</option>
                      <option value="-avg_score">Avg rating &#9660;</option>
                      <option value="-all_scores">All ratings &#9660;</option>
                    </optgroup>
                  </FiltersCountry>
                </FormGroup>
              </AllProductsContainer>
            </FiltersExpanded>
          </FilterContainer>
        </FiltersForm>
      </FiltersRow>
      <FiltersDivide visible={visible} />
      {hasLoaded && queryLoaded ? (
        <>
          <ProductsPageRow heightcorrection={heightcorrection}>
            {!!results.results?.length ? (
              results.results.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            ) : (
              <Asset
                src={
                  "https://res.cloudinary.com/milo-milo/image/upload/v1664234685/000_1705.S.05.V01.surfingskeleton_pf4n2t.svg"
                }
                message="No products, no waves, no fun..."
                height={300}
              />
            )}
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
      {/* </>
      ) : (
        <Asset spinner />
      )} */}
    </>
  );
};

export default ProductsPage;
