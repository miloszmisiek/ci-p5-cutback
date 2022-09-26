import React, { useEffect, useState } from "react";
import {
  ButtonGroup,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import { useCategories } from "../../../contexts/CategoriesContext";
import {
  useQueryContext,
  useSetQueryContext,
} from "../../../contexts/QueryContext";
import ProductCard from "../productCard";
import { FormSwitch } from "../productEditForm/styles";
import {
  AllProductsButton,
  AllProductsContainer,
  CountryButton,
  DropBtnCustom,
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
  // const [hasLoaded, setHasLoaded] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [inStock, setInStock] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [ordering, setOrdering] = useState("");
  const [filterSet, setFilterSet] = useState({
    country: "",
    currency: "",
    page: "1",
  });
  const choices = useCategories();
  const { country, currency, page } = filterSet;
  const { query } = useQueryContext();
  // const { setHasLoaded } = useSetQueryContext();
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: filtered }, { data: all }] = await Promise.all([
          axiosReq.get(
            `/products/?in_stock=${inStock}&${filter}&ordering=${ordering}&country=${country}&price_currency=${currency}&search=${query}`
          ),
          axiosReq.get("/products"),
        ]);
        setResults(filtered);

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
        setPageCount(
          !!filtered.next
            ? Math.ceil(filtered?.count / filtered?.results?.length)
            : 0
        );
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    const timer = setTimeout(() => {
      handleMount();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, inStock, hasLoaded, ordering, country, currency, query, history]);

  const handlePageClick = async (e) => {
    try {
      const { data } = await axiosReq.get(
        `/products/?page=${
          e.selected + 1
        }&in_stock=${inStock}&${filter}&ordering=${ordering}&country=${country}&price_currency=${currency}&search=${query}`
      );
      setResults(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFilterSet({ ...filterSet, [e.target.name]: e.target.value });
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
              <AllProductsContainer>
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
                <AllProductsButton
                  onClick={(e) => {
                    e.preventDefault();
                    setInStock("");
                    setFilterSet({ country: "", currency: "", page: "1" });
                    setHasLoaded(false);
                  }}
                >
                  Show All
                </AllProductsButton>
              </AllProductsContainer>
              <AllProductsContainer select="true">
                <FormGroup>
                  <FormLabel>Country</FormLabel>
                  <FiltersCountry
                    as="select"
                    value={country}
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
                  <FormLabel>Currency</FormLabel>
                  <FiltersCountry
                    as="select"
                    name="currency"
                    value={currency}
                    onChange={handleChange}
                  >
                    <option value="">All</option>
                    <option disabled>──────────</option>
                    {choices.currencies?.map((currency) => (
                      <option key={currency.value} value={currency.value}>
                        ({currency.display_name}) {currency.value}
                      </option>
                    ))}
                  </FiltersCountry>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Sorting</FormLabel>
                  <FiltersCountry
                    as="select"
                    defaultValue={""}
                    name="ordering"
                    onChange={(e) => {
                      setOrdering(e.target.value);
                      setHasLoaded(false);
                    }}
                  >
                    <option value={""}>All</option>
                    <option disabled>──────────</option>
                    <optgroup label={`Ascending \u25b2`}>
                      <option value="price" disabled={!!!currency}>
                        Price &#9650;
                      </option>
                      <option value="title">Title &#9650;</option>
                      <option value="created_at">Created &#9650;</option>
                      <option value="avg_score">Avg score &#9650;</option>
                      <option value="all_scores">All scores &#9650;</option>
                    </optgroup>
                    <option disabled>──────────</option>
                    <optgroup label={`Descending \u25bc`}>
                      <option value="-price" disabled={!!!currency}>
                        Price &#9660;
                      </option>
                      <option value="-title">Title &#9660;</option>
                      <option value="-created_at">Created &#9660;</option>
                      <option value="-avg_score">Avg score &#9660;</option>
                      <option value="-all_scores">All scores &#9660;</option>
                    </optgroup>
                  </FiltersCountry>
                </FormGroup>
              </AllProductsContainer>
            </FiltersExpanded>
          </FilterContainer>
        </FiltersForm>
      </FiltersRow>
      <FiltersDivide visible={visible} />
      {hasLoaded ? (
        <>
          <ProductsPageRow heightcorrection={heightcorrection}>
            {!!results.results?.length ? (
              results.results.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            ) : (
              <Asset
                src={
                  "https://res.cloudinary.com/milo-milo/image/upload/v1664049160/travolta_uxurth.png"
                }
                message="There are no products. There is nothing to show here..."
                height={200}
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
