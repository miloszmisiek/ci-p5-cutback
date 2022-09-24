import styled from "styled-components";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { PostButton } from "../../comments/commentCreateForm/styles";
import { ActionButton } from "../../comments/commentEditForm/styles";

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
`;

export const ProfileButton = styled(PostButton)`
  display: flex;
  color: ${(props) => (props.delete ? "white" : "inherit")};
  background-color: ${(props) =>
    props.delete ? "#df2c14 !important;" : "inherit"};
  margin-top: ${(props) => (props.delete ? "1rem" : null)};

  &:hover {
    background-color: ${(props) =>
      props.delete ? "#B1220F !important;" : "inherit"};

    color: ${(props) => (props.delete ? "white !important" : "inherit")};
  }
`;

export const CancelButton = styled(ActionButton)`
  padding: 0.375rem 1.5rem;
  font-size: 1rem;
`;
