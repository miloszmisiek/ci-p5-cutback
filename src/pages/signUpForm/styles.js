import { Col, Container, Form } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledCol = styled(Col)`
    padding: 2rem;
    background-color: white;
    box-shadow: rgb(0 0 0 / 4%) 0px 3px 5px;
`;

export const StyledForm = styled(Form)`
    width: 100%;
    text-align: center;
`;

export const StyledFormGroup = styled(Form.Group) `
    margin-bottom: 1rem;
`;