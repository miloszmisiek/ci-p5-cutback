import React, { useEffect, useState } from 'react'
import { Alert, Form } from 'react-bootstrap';
import { Header, SubmitButton, Column, FormControl, FormGroup, FormLabel, FullRow, SignUpContainer, SignInLink } from '../signUpForm/styles'
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignInForm = (props) => {
    const { setBackground } = props;
    const [signInData, setsignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = signInData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    useEffect(() => {
        setBackground({ signIn: true, })
        return () => {
            setBackground(null)
        }
    }, [setBackground]);

    const handleChange = (event) => {
        setsignInData({
            // below you select the signInData and update only fields that are changing with the ... notation
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/login/", signInData);
            history.push("/");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <FullRow>
            <Column xs={12} md={6}>
                <SignUpContainer form="true">
                    <Form onSubmit={handleSubmit}>
                        <Header>
                            sign in
                        </Header>
                        <FormGroup controlId="username">
                            <FormLabel>Username/Email</FormLabel>
                            <FormControl
                                type="text"
                                placeholder="Username or Email"
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
                                name='password'
                                value={password}
                                onChange={handleChange}
                            />
                            {errors.passwor1?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}
                        </FormGroup>
                        <SubmitButton type="submit">
                            Login
                        </SubmitButton>
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
            {/* <Column xs={12} lg={6}>
          <SignUpImage src={'https://res.cloudinary.com/milo-milo/image/upload/v1662569911/signup-photo_zigcxi.jpg'} />
        </Column> */}
        </FullRow>
    )
}

export default SignInForm
