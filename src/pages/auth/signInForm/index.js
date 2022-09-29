import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import {
  Header,
  SubmitButton,
  Column,
  FormControl,
  FormGroup,
  FormLabel,
  FullRow,
  SignUpContainer,
  SignInLink,
} from "../signUpForm/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSetCurrentUser } from "../../../contexts/CurrentUserContext";
import { setTokenTimestamp } from "../../../utils/utils";
import { useSetQueryContext } from "../../../contexts/QueryContext";
import { useSetAlertContext } from "../../../contexts/AlertContext";

const SignInForm = (props) => {
  const setCurrentUser = useSetCurrentUser();
  const { setBackground } = props;
  const [signInData, setsignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { setHasLoaded } = useSetQueryContext();
  const { handleShowAlert } = useSetAlertContext();

  useEffect(() => {
    setBackground({ signin: "true" });
    return () => {
      setBackground(null);
    };
  }, [setBackground]);

  const handleChange = (event) => {
    setsignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.push("/");
      handleShowAlert("success", "Successfully logged in");
      setHasLoaded(false);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <FullRow>
      <Column xs={12} md={6}>
        <SignUpContainer form="true">
          <Form onSubmit={handleSubmit}>
            <Header>sign in</Header>
            <FormGroup controlId="username">
              <FormLabel>Username/Email</FormLabel>
              <FormControl
                type="text"
                placeholder="Username or Email"
                name="username"
                autoComplete="on"
                value={username}
                onChange={handleChange}
              />
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
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
                name="password"
                value={password}
                onChange={handleChange}
              />
              {errors.passwor1?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </FormGroup>
            <SubmitButton type="submit">Login</SubmitButton>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </SignUpContainer>
        <SignUpContainer>
          Don't have an account? <SignInLink to="/signup">Sign up</SignInLink>
        </SignUpContainer>
      </Column>
    </FullRow>
  );
};

export default SignInForm;
