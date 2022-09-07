import React, { useState } from 'react'
import { CenteredForm, Header, SubmitButton, Column, FormControl, FormGroup, FormLabel, FullRow } from './styles'

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
  });
  const { email, username, password1, password2 } = signUpData;

  return (
      <FullRow>
        <Column xs={12} lg={6}>
          <CenteredForm>
            <Header>
              sign up
            </Header>
            <FormGroup controlId="username">
              <FormLabel>Username</FormLabel>
              <FormControl
                type="text"
                placeholder="Username"
                name='username'
                value={username}
              />
            </FormGroup>
            <FormGroup controlId="email">
              <FormLabel>Email address</FormLabel>
              <FormControl
                type="email"
                placeholder="Email Address"
                name='email'
                value={email}
              />
            </FormGroup>
            <FormGroup controlId="password1">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Password"
                name='password1'
                value={password1}
              />
            </FormGroup>
            <FormGroup controlId="password2">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Confirm Password"
                name='password2'
                value={password2}
              />
            </FormGroup>
            <SubmitButton type="submit" onClick={(e) => e.preventDefault()}>
              Submit
            </SubmitButton>
          </CenteredForm>
        </Column>
      </FullRow>
  )
}

export default SignUpForm
