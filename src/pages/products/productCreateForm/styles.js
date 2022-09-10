import { Button, Card } from "react-bootstrap";
import styled from "styled-components";
import { Column } from "../productCard/styles";
import Form from "react-bootstrap/Form";
import { SubmitButton } from "../../auth/signUpForm/styles";

export const CreateCard = styled(Card)``;

export const CreateColumn = styled(Column)``;

export const Thumbnails = styled(Card.Body)`
  border-top: 1px solid rgba(0,0,0,.125);
  border-bottom: 1px solid rgba(0,0,0,.125);
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

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const TitleText = styled.div`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const AddProductButton = styled(AddImageButton)`
    border-radius: 5px;
`;

export const ButtonsWrapper = styled(Form.Group)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #adb5bd;
    padding-top: 1rem;
`;

export const FormControlMt = styled(Form.Control)`
    margin-top: 1rem; 
`;