import styled from "styled-components";
import { AvgScore, RatingComponent } from "../productCard/styles";
import { CreateColumn } from "../productCreateForm/styles";
import { CarouselImg, CarouselStyled } from "../productsPage/styles";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

export const ProductPageColumn = styled(CreateColumn)`
  background-color: transparent;
  width: 100%;
  height: fit-content;
  padding: 0.5rem;
`;

export const CarouselProductPage = styled(CarouselStyled)``;

export const CarouselImgProductPage = styled(CarouselImg)`
  max-height: 400px;
  /* box-shadow: rgb(0 0 0 / 4%) 0px 3px 5px; */
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: rgb(0 0 0 / 4%) 0px 3px 5px;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end !important;
  flex-direction: column;
  width: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 340px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;
export const Category = styled.div`
  display: flex;
  width: 100%;
  max-width: 50%;
  align-items: center;
  letter-spacing: 0.1rem;
  color: darkblue;
  font-weight: 500;

  @media (max-width: 340px) {
    margin-left: auto;
    justify-content: flex-end;
    max-width: fit-content;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 1rem;
`;

export const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 50%;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 340px) {
    margin-left: auto;
    max-width: fit-content;
  }
`;

export const Divider = styled.hr`
  color: rgba(0, 0, 0, 0.125);
  width: 100%;
  margin: 1rem auto;
  border-top: 2px solid rgba(0, 0, 0, 0.125);
`;

export const BrandStock = styled.div`
  margin-top: 0.5rem;
  display: flex;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: ${(props) =>
    props.available ? "green" : props.outOfStock ? "red" : "black"};
  font-style: ${(props) =>
    props.available ? "normal" : props.outOfStock ? "normal" : "italic"};
`;

export const Description = styled.div`
  margin-top: 0.5rem;
  display: flex;
  text-align: justify;
  font-size: 1.2rem;
`;

export const ContactInformation = styled.div`
  font-weight: 500;
  color: darkblue;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const ContactData = styled.div`
  margin-bottom: 0.5rem;

  a {
    padding-right: 0.3rem;
  }
`;

export const RatingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-top: 1rem;
  padding: 1rem;
`;

export const CommentContainer = styled(RatingsWrapper)`
  color: rgba(0, 0, 0, 0.6);
`;

export const ProductAvgScore = styled(AvgScore)`
  margin-right: 0.8rem;
`;

export const CountryFlag = styled(ReactCountryFlag)`
  margin-left: 0.4rem;
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
`;

export const Rating = styled(RatingComponent)`
  justify-content: ${(props) => (props.scores ? "space-around" : "center")};
`;

export const CreatedDate = styled(ContactInformation)`
  color: rgba(0, 0, 0, 0.4);
  /* margin-left: auto; */
`;

export const TitleLink = styled(Link)`
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;
