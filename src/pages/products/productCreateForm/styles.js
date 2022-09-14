import { Button, Card } from "react-bootstrap";
import styled, { css } from "styled-components";
import { Column } from "../productCard/styles";
import Form from "react-bootstrap/Form";
import { SubmitButton } from "../../auth/signUpForm/styles";

export const CreateCard = styled(Card)``;

export const CreateColumn = styled(Column)``;

export const Thumbnails = styled(Card.Body)`
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  gap: 1rem;
  overflow: auto;
  min-height: 5rem;
`;

export const LinkSpan = styled.span`
  display: flex;
  padding-right: 1rem;
`;

export const ActionBody = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 370px) {
    flex-direction: column;
  }
`;

export const FormSwitch = styled(Form.Switch)`
  .custom-control-input:checked ~ .custom-control-label::before {
    border-color: rgba(180, 211, 178, 1);
    background-color: rgba(180, 211, 178, 1);
  }
  @media (max-width: 370px) {
    margin-bottom: 1rem;
  }
`;

export const AddImageButton = styled.div`
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: ${(props) =>
    props.disabled ? "#df2c14" : "rgba(180, 211, 178, 1)"}!important;
  border: none;
  color: black;
  font-weight: 600;
  border-radius: 20px;
  width: auto;
  max-width: max-content;
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

export const Figure = styled.figure`
  margin: 0;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;

export const FormLabel = styled(Form.Label)`
  margin-bottom: 0;
`;

export const Thumbnail = styled.img`
  margin-right: 1rem;
  cursor: pointer;

`;

export const ImagePreview = styled(Card.Img)`
  max-height: 300px;
  object-fit: fill;
`;
