import { Card, Col } from "react-bootstrap";
import styled from "styled-components";

export const Column = styled(Col)`
  height: 100%;
  /* outline: 1px solid blue; */
  padding: 1rem;
`;

export const CardWrapper = styled(Card)`
  /* outline: 1px solid red; */
  /* box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px; */
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;

export const CardHeader = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled(Card.Title)`
  text-align: center;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RatingComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;

export const PriceComponent = styled.div`
  cursor: default;
`;
