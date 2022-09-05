import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './componenets/navbar/NavBar';
import Footer from './componenets/footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
