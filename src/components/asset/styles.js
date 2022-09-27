import styled from "styled-components";

export const AssetWrapper = styled.div`
  padding: ${(props) =>
    props.signin ? "1.5rem" : props.productCard ? "0 !important" : "4rem"};
  margin-top: ${(props) => (props.productCard ? "1rem" : null)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => (props.signin ? null : "120px")};
  width: 100%;
  ${(props) =>
    props.outofstock
      ? `position: absolute;
    top: 18px;
    left: 0;
    z-index: 1;`
      : null}
`;

export const Img = styled.img`
  border-radius: 20px;
  margin-bottom: ${(props) => (props.productCard ? null : "1rem")};
`;

export const Msg = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
`;
