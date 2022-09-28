import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { ModalProvider } from "./contexts/ModalContext";
import { AlertProvider } from "./contexts/AlertContext";
import { QueryProvider } from "./contexts/QueryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <CurrentUserProvider>
        <QueryProvider>
          <AlertProvider>
              <ModalProvider>
                <App />
              </ModalProvider>
          </AlertProvider>
        </QueryProvider>
      </CurrentUserProvider>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
