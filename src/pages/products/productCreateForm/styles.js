import { Card } from "react-bootstrap";
import styled from "styled-components";
import { Column } from "../productCard/styles";
import Form from "react-bootstrap/Form";
import { SubmitButton } from "../../auth/signUpForm/styles";

export const CreateCard = styled(Card)``;

export const CreateColumn = styled(Column)``;

export const Thumbnails = styled(Card.Body)`
  border: 1px solid black;
  display: flex;
`;

export const LinkSpan = styled.span`
  display: flex;
  padding-right: 1rem;
`;

export const ActionBody = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormSwitch = styled(Form.Switch)`
  .custom-control-input:checked ~ .custom-control-label::before {
    border-color: rgba(180, 211, 178, 1);
    background-color: rgba(180, 211, 178, 1);
  }
`;

export const AddImageButton = styled(SubmitButton)`
    max-width: 33% !important;
`;