import React, { useEffect, useState } from "react";
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import { axiosReq } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import { useCategories } from "../../../contexts/CategoriesContext";
import ProductCard from "../productCard";
import { FormSwitch } from "../productEditForm/styles";
import {
  CountryButton,
  DropBtnCustom,
  FilterContainer,
  FilterInStock,
  FiltersCountry,
  FiltersDivide,
  FiltersForm,
  FiltersRow,
  FiltersTitle,
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
  const [hasLoaded, setHasLoaded] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [inStock, setInStock] = useState("");
  const choices = useCategories();

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
  // "owner__profile", "in_stock", "category", "brand", "country", "city";
  return (
    <>
      {hasLoaded ? (
        <>
          <FiltersRow visible={visible}>
            <FiltersForm>
              <FilterContainer>
                <FiltersTitle>
                  Filters <i className="fas fa-tools"></i>
                  <FiltersDivide />
                </FiltersTitle>
                <FiltersCountry
                  as="select"
                  // defaultValue={""}
                  // name="country"
                  // onChange={handleChange}
                >
                  <option disabled value={""}>
                    Countires
                  </option>
                  {choices.countries?.map((country, idx) => (
                    <option key={idx} value={country.value}>
                      {country.display_name}
                    </option>
                  ))}
                </FiltersCountry>
                <FiltersCountry
                  as="select"
                  // defaultValue={""}
                  // name="country"
                  // onChange={handleChange}
                >
                  <option disabled value={""}>
                    Ratings
                  </option>
                  {choices.ratings?.map((rating, idx) => (
                    <option key={idx} value={rating.value}>
                      {rating.display_name}
                    </option>
                  ))}
                </FiltersCountry>
                <FilterInStock
                  // onChange={onSwitchAction}
                  name="in_stock"
                  id="custom-switch"
                  label="In Stock"
                  // checked={in_stock}
                  // value={in_stock}
                />
              </FilterContainer>
            </FiltersForm>
          </FiltersRow>
          <ProductsPageRow heightcorrection={heightcorrection}>
            {!!results?.results.length ? (
              results.results?.map((product) => (
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
    </>
  );
};

export default ProductsPage;
