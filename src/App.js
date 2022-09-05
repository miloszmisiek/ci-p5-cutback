import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './componenets/navbar/index.js';
import Footer from './componenets/footer/index.js';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
