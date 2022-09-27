import styled from "styled-components";
import { FullRow } from "../auth/signUpForm/styles";

export const NotFound = styled.div`
  position: absolute;
  top: 6rem;
  left: 5%;
  padding: 2rem 1rem;
  font-size: 2.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-family: "Rubik Dirt", sans-serif;
  color: black;
  border: 1px solid;
  
  @media (max-width: 361px) {
    font-size: 1.4rem !important;
  }

  @media (max-width: 455px) {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const NotFoundRow = styled(FullRow)`
  @media (max-width: 767px) {
    padding-top: 15vh;
  }

  @media (max-width: 380px) {
    padding-top: 10vh;
  }
`;
