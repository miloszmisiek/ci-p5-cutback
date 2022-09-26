import ReactPaginate from "react-paginate";
import {
  Button,
  Carousel,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import styled from "styled-components";
import { FormSwitch } from "../productEditForm/styles";

export const ProductsPageRow = styled(Row)`
  /* min-height: ${(props) =>
    props.heightcorrection
      ? `calc(100vh - ${props.heightcorrection})`
      : "calc(100vh - 309px)"}; */
`;

export const CarouselImg = styled.img`
  display: block;
  width: 100%;
  max-height: 200px;
  object-fit: contain;
`;

export const CarouselStyled = styled(Carousel)`
  margin-top: 1rem;
  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' stroke='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
  }
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' stroke='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
  }

  .carousel-indicators li {
    border: 1px solid black !important;
    margin-bottom: 10px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2.5rem;
  flex-wrap: wrap;
  position: relative;
  min-height: 3rem;
  margin: 1rem 0;
  @media (max-width: 767px) {
    gap: 1.5rem;
  }
  @media (max-width: 495px) {
    gap: 1.5rem;
  }
`;

export const ReactPaginateStyled = styled(ReactPaginate)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 5rem;
  .page-item:first-child {
    margin-right: 1rem;
  }
  .page-item:last-child {
    margin-left: 1rem;
  }
  .page-item:first-child .page-link,
  .page-item:last-child .page-link {
    border-radius: 50% !important;
    background-color: white;
    border: 1px solid #dee2e6;
  }

  .page-link {
    background: transparent;
    border: none;
    color: black;
  }

  .page-item.active .page-link {
    background: transparent;
    border: 0;
    color: green;
    font-weight: 700;
  }

  @media (max-width: 575px) {
    justify-content: center;
  }
`;

export const FiltersRow = styled(Row)`
  display: ${(props) => (props.visible ? "flex" : "none")};
`;

export const FiltersForm = styled(Form)`
  width: 100%;
  display: flex;
  padding: 0 1rem;
`;

export const FiltersCountry = styled(Form.Control)`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background: transparent !important;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 100%;
  max-width: 8rem;
  padding: 0 0.5rem;
  text-overflow: ellipsis;

  optgroup,
  option {
    text-align: center;
  }
  /* option {
    text-align: left;
  } */
`;

export const FilterInStock = styled(FormSwitch)`
  margin-bottom: 0;
  width: 100%;
  max-width: 8rem;
  margin-top: auto;
`;

export const FiltersTitle = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  font-weight: 500;
  letter-spacing: 0.1rem;
  position: absolute;
  left: 1.5rem;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  max-width: 7rem;
  padding: 0.375rem;
  cursor: pointer;
  /* padding: 0 1rem; */
  @media (max-width: 767px) {
    position: static;
    display: flex;
    left: auto;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const FiltersDivide = styled.hr`
  display: ${(props) => (props.visible ? "block" : "none")};
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const AddProductBtn = styled.div`
  border: 1px solid rgba(180, 211, 178, 1);
  border-radius: 50%;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  position: absolute;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  color: rgba(0, 0, 0, 0.8);
  background-color: rgba(180, 211, 178, 1);
  &:hover {
    background-color: rgba(180, 193, 185, 1);
    border-color: rgba(180, 193, 185, 1);
  }
`;

export const FiltersExpanded = styled.div`
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  position: ${(props) => (props.expanded ? "static" : "absolute")};
  z-index: ${(props) => (props.expanded ? "1" : "-1")};
  -webkit-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-left: auto;
  max-width: 80%;

  @media (max-width: 767px) {
    justify-content: space-around;
    margin: auto;
    max-width: 100%;
  }
`;

export const FormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  max-width: 8rem;
  width: 100%;
`;

export const FormLabel = styled(Form.Label)`
  margin-bottom: 0.3rem;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
`;

export const AllProductsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: ${(props) => (props.select ? "30rem" : "15rem")};
  width: 100%;
  gap: 1rem;
  margin-top: auto;

  @media (min-width: 1200px) {
    max-width: ${(props) => (props.select ? "30rem" : "20rem")};
    justify-content: space-evenly;
  }

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

export const AllProductsButton = styled.button`
  box-shadow: rgb(0 0 0 / 4%) 0px 3px 5px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 100%;
  max-width: 8rem;
  padding: 0 0.5rem;
  /* margin-bottom: 0.5rem; */
  margin-top: auto;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    font-weight: 500;
  }
`;
