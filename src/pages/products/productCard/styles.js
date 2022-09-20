import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Column = styled(Col)`
  height: 100%;
  /* outline: 1px solid blue; */
  padding: 1rem;
`;

export const CardWrapper = styled(Card)`
  /* outline: 1px solid red; */
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  /* &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  } */
`;

export const CardHeader = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled(Card.Title)`
  text-align: center;
  /* border-bottom: 1px solid black; */
  font-size: 1.5rem;

  @media (max-width: 860px) {
    font-size: 1.2rem;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RatingComponent = styled.div`
  display: flex;
  flex-direction: row;
  cursor: default;
  justify-content: flex-end;
`;

export const PriceComponent = styled.div`
  cursor: default;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const NavLinkProduct = styled(NavLink)`
  &:hover {
    /* text-decoration: underline !important; */
    font-weight: 600;
  }
`;

export const CardBody = styled(Card.Body)`
  /* padding: 1rem; */
`;

export const AvgScore = styled.div`
  margin-top: 8px;
  margin-right: 5px;
  font-size: 0.7rem;
  font-weight: 600;
`;

export const Username = styled.div`
  margin-left: 0.3rem;
`;