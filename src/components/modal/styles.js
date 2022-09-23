import { Modal } from "react-bootstrap";
import styled from "styled-components";


export const ModalBody = styled(Modal.Body)`
  display: flex;
  justify-content: ${(props) => (props.text ? "center" : "space-around")};
  flex-direction: ${(props) => (props.text ? "column" : "row")};
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
