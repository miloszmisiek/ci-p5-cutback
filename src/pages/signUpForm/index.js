import React, { useEffect, useState } from 'react'
import { Alert, Form } from 'react-bootstrap';
import { Header, SubmitButton, Column, FormControl, FormGroup, FormLabel, FullRow, SignUpContainer, SignInLink } from './styles'
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUpForm = (props) => {
  const { setBackground } = props;
  const [signUpData, setSignUpData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
  });
  const { email, username, password1, password2 } = signUpData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  useEffect(() => {
    setBackground({signUp: true,})
    return () => {
      setBackground(null)
    }
  }, [setBackground]);

  const handleChange = (event) => {
    setSignUpData({
      // below you select the signUpData and update only fields that are changing with the ... notation
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
      console.error(err);
    }
  };

  return (
    <FullRow>
      <Column xs={12} md={6}>
        <SignUpContainer form="true">
          <Form onSubmit={handleSubmit}>
            <Header>
              sign up
            </Header>
            <FormGroup controlId="username">
              <FormLabel>Username</FormLabel>
              <FormControl
                type="text"
                placeholder="Username"
                name='username'
                autoComplete="on"
                value={username}
                onChange={handleChange}
              />
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </FormGroup>
            <FormGroup controlId="email">
              <FormLabel>Email address</FormLabel>
              <FormControl
                type="email"
                placeholder="Email Address"
                name='email'
                autoComplete="on"
                value={email}
                onChange={handleChange}
              />
              {errors.email?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </FormGroup>
            <FormGroup controlId="password1">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Password"
                autoComplete="on"
                name='password1'
                value={password1}
                onChange={handleChange}
              />
              {errors.password1?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </FormGroup>
            <FormGroup controlId="password2">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Confirm Password"
                autoComplete="on"
                name='password2'
                value={password2}
                onChange={handleChange}
              />
              {errors.password2?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </FormGroup>
            <SubmitButton type="submit">
              Submit
            </SubmitButton>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
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
