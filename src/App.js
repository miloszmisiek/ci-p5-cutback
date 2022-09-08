import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/navbar/index';
import Footer from './components/footer/index';
import './api/axiosDefaults';
import SignUpForm from './pages/signUpForm/index';
import { Container, Image } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import SignInForm from './pages/signInForm';


export const Main = styled.main`
    height: 100%;
`;

export const BackgroundImage = styled(Image)`
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${props => props.signin ? "bottom 0px right 62%" : null};
    
    @media (max-width: 767px) {
      display: none;
    }
`;

function App() {
  const [background, setBackground] = useState();
  return (
    <div className={styles.App}>
      <NavBar />
      <Main >
        {background ? 
        <BackgroundImage 
        src={background.signIn ?
            'https://res.cloudinary.com/milo-milo/image/upload/v1662642961/signin-section_spvixz.jpg'
          : 
            'https://res.cloudinary.com/milo-milo/image/upload/v1662646113/signup-section_japbut.jpg'
        }
        signin={background.signIn ? "true" : null} 
        /> : null}
        <Container className={styles.Main_Container}>
          <Switch>
            <Route exact path="/" render={() => <h1>Home Page</h1>} />
            <Route exact path="/signin" render={() => <SignInForm setBackground={setBackground} />} />
            <Route exact path="/signup" render={() => <SignUpForm setBackground={setBackground} />} />
            <Route render={() => <h1>Page not found!</h1>} />
          </Switch>
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
