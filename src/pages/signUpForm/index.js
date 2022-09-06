import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { StyledCol, StyledForm, StyledFormGroup } from './styles'

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
  });
  const { email, username, password1, password2 } = signUpData;

  return (
    <Container>
      <Row>
        <StyledCol xs={12} lg={6}>
          <StyledForm>
            <StyledFormGroup controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name='username'
                value={username}
              />
            </StyledFormGroup>
            <StyledFormGroup controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name='email'
                value={email}
              />
            </StyledFormGroup>
            <StyledFormGroup controlId="password1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name='password1'
                value={password1}
              />
            </StyledFormGroup>
            <StyledFormGroup controlId="password2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name='password2'
                value={password2}
              />
            </StyledFormGroup>
            <Button variant="primary" type="submit" onClick={(e) => e.preventDefault()}>
              Submit
            </Button>
          </StyledForm>
        </StyledCol>
      </Row>
    </Container>
  )
}

export default SignUpForm
