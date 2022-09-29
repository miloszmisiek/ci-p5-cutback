import Row from "react-bootstrap/Row";
import styled from "styled-components";

export const ProfileInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
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
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 8rem;
`;

export const StatsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const StatsTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const StatsValues = styled.div`
  font-size: 1.1rem;
`;

export const AvatarContainer = styled.div`
  display: flex;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`;

export const AddProductBtn = styled.div`
  border: 1px solid rgba(180, 211, 178, 1);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  position: absolute;
  right: 2rem;
  top: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  color: rgba(0, 0, 0, 0.8);
  background-color: rgba(180, 211, 178, 1);
  &:hover {
    background-color: rgba(180, 193, 185, 1);
    border-color: rgba(180, 193, 185, 1);
  }

  @media (max-width: 465px) {
    right: auto;
    left: 50%;
    bottom: -5.5rem;
    top: auto;
    z-index: 500;
    transform: translateX(-50%);
  }
`;

export const RowProfilePage = styled(Row)`
  position: relative;
`;

export const ProfilePageDivider = styled.hr`
  @media (max-width: 465px) {
    margin-bottom: 5rem;
  }
`;
