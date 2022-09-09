import styled from "styled-components";
import { StyledLogo } from "../navbar/styles";

export const StyledFooter = styled.div`
  position: relative;
  margin-top: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  background-color: black;
  color: white;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledFooterLogo = styled(StyledLogo)`
  font-size: 1rem;
  max-width: ${(100 / 12) * 4}% !important;
  padding-left: 2.5rem;
  @media (max-width: 760px) {
    max-width: ${(100 / 12) * 3}% !important;
  }
  @media (max-width: 600px) {
    max-width: 100% !important;
    text-align: center;
    padding-left: 0;
  }
  @media (max-width: 351px) {
    font-size: 1rem !important;
  } ;
`;

export const StyledRights = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${(100 / 12) * 4}%;
  font-size: 0.8rem;
  @media (max-width: 760px) {
    max-width: ${(100 / 12) * 6}%;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    margin-top: 1rem;
  }
`;

export const StyledSocialLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: ${(100 / 12) * 4}%;
  @media (max-width: 760px) {
    max-width: ${(100 / 12) * 3}%;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    margin-top: 1rem;
  }
`;
