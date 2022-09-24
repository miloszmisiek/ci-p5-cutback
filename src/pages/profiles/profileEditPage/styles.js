import styled from "styled-components";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { PostButton } from "../../comments/commentCreateForm/styles";
import { ActionButton } from "../../comments/commentEditForm/styles";
import { Form, Row, Tooltip } from "react-bootstrap";

export const PersonalInfo = styled.div`
  padding: 1rem 1rem 0;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  color: ${(props) => (props.delete ? "#df2c14" : "black")};
  margin-top: ${(props) => (props.delete ? "1.5rem" : null)}; ;
`;

export const PhoneInputCustom = styled(PhoneInput)`
  .PhoneInputInput,
  .PhoneInputCountrySelect {
    padding: 0.375rem 0.75rem;
  }
  .PhoneInputInput {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }

  /* @media (max-width: 767px) {
    .PhoneInputInput {
      text-align: center;
    }
  } */
`;

export const ProfileButton = styled(PostButton)`
  display: flex;
  color: ${(props) => (props.delete ? "rgba(255, 255, 255)" : "inherit")};
  background-color: ${(props) =>
    props.delete
      ? "#df2c14 !important;"
      : props.edit
      ? "rgba(0,0,0,0.2) !important"
      : "inherit"};
  margin: ${(props) => (props.delete ? "1rem 0" : null)};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  &:hover {
    background-color: ${(props) =>
      props.delete
        ? "#B1220F !important;"
        : props.edit
        ? "rgba(0,0,0,0.3) !important"
        : "inherit"};

    color: ${(props) => (props.delete ? "white !important" : "inherit")};
  }

  @media (max-width: 767px) {
    margin: ${(props) => (props.delete ? "1rem auto" : "inherit")};
  }
`;

export const CancelButton = styled(ActionButton)`
  padding: 0.375rem 1.5rem;
  font-size: 1rem;
`;

export const EmailAddress = styled.div`
  margin-bottom: 1rem;
`;

export const EmailDescritpion = styled.span`
  font-weight: 500;
  margin-right: 0.8rem;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  /* max-height: 80%; */
  width: 100%;
  margin-top: 1rem;
`;

export const EditPicture = styled(ProfileButton)`
  font-size: 0.8rem;
  margin-top: 1rem;
  padding: 0.375rem 0.5rem !important;
  display: flex;
  align-items: center;
`;

export const AvatarFigure = styled.figure`
  border-radius: 50%;
  cursor: pointer;
`;

export const ToolTip = styled(Tooltip)`
  font-size: 0.7rem;
`;

export const RowCustom = styled(Row)`
  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const FormControl = styled(Form.Control)`
  /* @media (max-width: 767px) {
    text-align: center;
  } */
`;
