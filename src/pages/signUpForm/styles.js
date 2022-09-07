import { Button, Col, Form, Row } from 'react-bootstrap'
import styled from 'styled-components'


export const FullRow = styled(Row)`
    height: calc(100% - 1.5rem);
    background-color: #f8f8f8;
    margin-left: 1rem;
    margin-right: 1rem;

    @media (max-width:767px) {
        height: calc(100% - 2rem);
      }
`;

export const Column = styled(Col)`
    padding: 2rem;
    background-color: white;
    box-shadow: rgb(0 0 0 / 4%) 0px 3px 5px;
    margin-top: auto;
    margin-bottom: auto;
`;

export const CenteredForm = styled(Form)`
    width: 100%;
    text-align: center;
`;

export const FormGroup = styled(Form.Group) `
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
    background-color: rgba(180,211,178,1) !important;
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
`;