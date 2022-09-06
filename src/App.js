import styles from './App.module.css';
import {Route, Switch } from "react-router-dom";
import NavBar from './componenets/navbar/index.js';
import Footer from './componenets/footer/index.js';
import './api/axiosDefaults';
import SignUpForm from './pages/SignUpForm';
import { Container } from 'react-bootstrap';


function App() {
  return (
      <div className={styles.App}>
        <NavBar />
        <Container className={styles.Main}>
          <Switch>
            <Route path="/signin" render={() => <h1>Sign in</h1>} />
            <Route path="/signup" render={() => <SignUpForm />} />
            <Route path="/" render={() => <h1>Home Page</h1>} />
            <Route render={() => <h1>Page not found!</h1>} />
          </Switch>
        </Container>
        <Footer />
      </div>
  );
}

export default App;
