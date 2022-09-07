import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/navbar/index';
import Footer from './components/footer/index';
import './api/axiosDefaults';
import SignUpForm from './pages/signUpForm/index';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';


export const Main = styled.main`
    height: 100%;
    ${props => props.background ?
    `
      background-image: url('https://res.cloudinary.com/milo-milo/image/upload/v1662569444/signup-background_oljnys.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 0 60%;
      `
    :
    null
  };
`;

function App() {
  const [signUp, setSignUp] = useState();
  return (
    <div className={styles.App}>
      <NavBar singUp={signUp} setSignUp={setSignUp} />
      <Main background={signUp}>
        <Container className={styles.Main_Container}>
          <Switch>
            <Route exact path="/" render={() => <h1>Home Page</h1>} />
            <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route render={() => <h1>Page not found!</h1>} />
          </Switch>
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
