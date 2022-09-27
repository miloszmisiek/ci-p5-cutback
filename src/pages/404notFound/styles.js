import styled from "styled-components";

export const NotFound = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  top: 6rem;
  left: 5%;

  padding: 4rem 1rem;
  font-size: 2.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  /* background-color: rgba(155, 142, 102); */
  background: -webkit-linear-gradient(360deg, #949494 10%, #efefef 360%);
  background: linear-gradient(360deg, #949494 10%, #efefef 360%);

  font-family: "Rubik Dirt", sans-serif;
  color: white;

  @media (max-width: 767px) {
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
