import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/navbar/index';
import Footer from './components/footer/index';
import './api/axiosDefaults';
import SignUpForm from './pages/signUpForm/index';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() => <h1>Page not found!</h1>} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
