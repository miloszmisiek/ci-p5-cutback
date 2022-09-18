import { Form } from "react-bootstrap";
import styled from "styled-components";
import { AddProductButton, ButtonsWrapper, FormControlMt } from "../productCreateForm/styles";

export const EditButtonsWrapper = styled(ButtonsWrapper)`
    justify-content: space-between;
`;

export const ProductDeleteButton = styled(AddProductButton)`
    background-color: #df2c14 !important;
`;

export const Brand = styled(Form.Control)`
    max-width: 50%;

`;

export const FormSwitch = styled(Form.Switch)`
width: 100%;
text-align: center;
  .custom-control-input:checked ~ .custom-control-label::before {
    border-color: rgba(180, 211, 178, 1);
    background-color: rgba(180, 211, 178, 1);
  }
  @media (max-width: 370px) {
    margin-bottom: 1rem;
  }
`;

export const InStockBrandWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;