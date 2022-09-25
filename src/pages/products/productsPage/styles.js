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
  min-height: ${(props) =>
    props.heightCorrection
      ? `calc(100vh - ${props.heightcorrection})`
      : "calc(100vh - 309px)"};
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
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2.5rem;
  flex-wrap: wrap;
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
`;

export const FiltersCountry = styled(Form.Control)`
  background: transparent !important;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 100%;
  max-width: 10rem;
  padding: 0 0.5rem;
`;

export const FilterInStock = styled(FormSwitch)`
  width: auto;
`;

export const FiltersTitle = styled.div`
  font-weight: 500;
  letter-spacing: 0.1rem;
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

export const FiltersDivide = styled.hr`
  display: none;
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
