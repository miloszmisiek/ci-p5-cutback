import styled from "styled-components";

export const ProfileInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  /* border: 1px solid black; */
  
  align-items: center;
`;

export const ProfileData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProfileName = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
`;

export const Stats = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;