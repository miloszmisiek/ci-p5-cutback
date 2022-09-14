import { Card, Form } from "react-bootstrap";
import styled from "styled-components";
import { Column } from "../productCard/styles";

export const CreateColumn = styled(Column)``;
export const CreateCard = styled(Card)``;

export const ActionBody = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 370px) {
    flex-direction: column;
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
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: white;
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

export const FormSwitch = styled(Form.Switch)`
  .custom-control-input:checked ~ .custom-control-label::before {
    border-color: rgba(180, 211, 178, 1);
    background-color: rgba(180, 211, 178, 1);
  }
  @media (max-width: 370px) {
    margin-bottom: 1rem;
  }
`;

export const ImagePreview = styled(Card.Img)`
  max-height: 300px;
  object-fit: fill;
`;

export const Thumbnail = styled.img`
  margin-right: 1rem;
  cursor: pointer;
`;

export const Thumbnails = styled(Card.Body)`
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  gap: 1rem;
  overflow: auto;
  min-height: 5rem;
`;
