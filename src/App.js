import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './componenets/NavBar/NavBar';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
    </div>
  );
}

export default App;
