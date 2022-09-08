import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { Header, SubmitButton, Column, FormControl, FormGroup, FormLabel, FullRow, SignUpContainer, SignInLink } from './styles'

const SignUpForm = (props) => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
  });
  const { email, username, password1, password2 } = signUpData;

  useEffect(() => {
    props.setSignUp(true)
    return () => { 
      props.setSignUp(null)
    }
  }, [props]);

  return (
      <FullRow>
        <Column xs={12} lg={6}>
          <SignUpContainer form="true">
            <Form>
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
            </Form>
          </SignUpContainer>
          <SignUpContainer>
            Already have an account? <SignInLink to="/signin">Sign in</SignInLink>
          </SignUpContainer>
        </Column>
        {/* <Column xs={12} lg={6}>
          <SignUpImage src={'https://res.cloudinary.com/milo-milo/image/upload/v1662569911/signup-photo_zigcxi.jpg'} />
        </Column> */}
      </FullRow>
  )
}

export default SignUpForm
