import styled from "styled-components";

export const ProfileInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  /* border: 1px solid black; */
  padding: 1rem;
  gap: 1rem;
  align-items: center;

  @media (max-width: 767px) {
   flex-direction: column;
  }
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;

export const ProfileName = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const StatsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;
  /* @media (max-width: 767px) {
    flex-direction: column;
  } */
`;

export const StatsTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const StatsValues = styled.div`
  font-size: 1.1rem;
  /* font-weight: 500; */
`;

export const AvatarContainer = styled.div`
  display: flex;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`;