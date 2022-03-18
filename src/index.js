import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CardProvider } from "./component/Context/CardContext/CardContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CardProvider>
        <App />
      </CardProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
