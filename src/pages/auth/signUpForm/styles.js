import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FullRow = styled(Row)`
  height: 100%;
  padding-top: 10vh;
  width: 100%;
  display: flex;
  @media (max-width: 992px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const Column = styled(Col)`
  margin: auto 1rem auto auto;
  @media (max-width: 992px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const FormGroup = styled(Form.Group)`
  margin-bottom: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.3rem;
  color: #93a85c;
  text-transform: uppercase;
`;

export const SubmitButton = styled(Button)`
  background-color: rgba(180, 211, 178, 1) !important;
  border: none;
  color: black;
  font-weight: 600;
  width: 100%;
  max-width: 60%;
  border-radius: 20px;
`;

export const FormLabel = styled(Form.Label)`
  display: none;
`;

export const FormControl = styled(Form.Control)`
  text-align: center;
  @media (max-width: 299px) {
    font-size: 0.8rem;
  } ;
`;

export const SignUpContainer = styled(Container)`
  width: 100%;
  max-width: 100%;
  text-align: center;
  background-color: white;
  border: 1px solid #dbd9d9;
  padding: ${(props) => (props.form ? "2rem" : "1rem")};
  box-shadow: rgb(0 0 0 / 4%) 0px 3px 5px;
  border-radius: 20px;
  margin-top: ${(props) => (props.form ? null : "1rem")};
`;

export const SignInLink = styled(Link)`
  color: #93a85c;
  font-weight: 600;

  &:hover {
    color: black;
  }
`;

export const SignUpImage = styled(Image)`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 4%) 0px 3px 5px;
`;
