import styled from "styled-components";
import { Column } from "../productCard/styles";
import Form from "react-bootstrap/Form";
import { SubmitButton } from "../../auth/signUpForm/styles";

export const CreateColumn = styled(Column)``;

export const LinkSpan = styled.span`
  display: flex;
  padding-right: 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.title ? "space-between" : "flex-end")};
  align-items: center;
  width: ${(props) => (props.title ? "100%" : null)};
`;

export const TitleText = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const AddProductButton = styled(SubmitButton)`
  width: auto;
  max-width: max-content;
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

export const FormControlMb = styled(Form.Control)`
  margin-bottom: 1rem;
`;

export const CurrencySelect = styled(Form.Control)`
  -webkit-appearance: none;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const TransparentInput = styled(Form.Control)`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: ${(props) => (props.price ? "end" : null)};
  max-width: 63%;
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: black;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: black;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: black;
  }

  @media (min-width: 1200px) {
    max-width: 30%;
  }
`;

export const FormLabel = styled(Form.Label)`
  margin-bottom: 0;
`;
