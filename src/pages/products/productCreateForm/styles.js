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
  flex-direction: ${(props) => (props.title ? "column" : null)};
  margin-left: ${(props) => (props.title ? null : "auto")};
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
  text-overflow: ellipsis;
  font-size: ${(props) => (props.price ? "1.5rem" : "2rem")};
  letter-spacing: ${(props) => (props.price ? null : "0.1rem")};
  font-weight: 500;
  text-align: center;
  margin-bottom: ${(props) => (props.price ? null : "1rem")};
  text-align: ${(props) => (props.price ? "end" : null)};
  cursor: pointer;
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
`;

export const FormLabel = styled(Form.Label)`
  margin-bottom: 0;
`;

export const PriceCurrency = styled.div`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: end;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;
