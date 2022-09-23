import ReactPaginate from "react-paginate";
import { Carousel, Row } from "react-bootstrap";
import styled from "styled-components";

export const ProductsPageRow = styled(Row)`
  min-height: ${(props) =>
    props.heightCorrection
      ? `calc(100vh - ${props.heightCorrection})`
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
