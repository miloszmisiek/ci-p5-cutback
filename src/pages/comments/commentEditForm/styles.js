import styled from "styled-components";

export const ActionButton = styled.button`
  padding: 0.3rem 0.5rem;
  background-color: ${(props) =>
    props.save ? "rgb(180,211,178)" : "transparent"};
  font-size: 0.8rem;
  color: ${(props) => (props.save ? "black" : "rgba(0,0,0,0.5)")};
  font-weight: 600;
  border: ${(props) => (props.save ? "none" : "1px solid rgba(0,0,0,0.5)")};
  border-radius: 5px;

  &:hover {
    background-color: ${(props) =>
      props.save ? "rgba(180, 193, 185, 1)" : "transparent"};
    border: ${(props) => (props.save ? "none" : "1px solid black")};
    color: black;
  }
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
