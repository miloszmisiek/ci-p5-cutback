import styled from "styled-components";

export const StyledAvatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${(props) =>
    props.shadow ? "rgb(0 0 0 / 4%) 0px 3px 5px" : null};
`;
