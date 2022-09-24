import styled from "styled-components";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { PostButton } from "../../comments/commentCreateForm/styles";

export const PersonalInfo = styled.div`
  padding: 1rem 1rem 0;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
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

export const SaveButton = styled(PostButton)`
    margin-left: auto;
    display: flex;
`;
