import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CardProvider } from "./component/Context/CardContext/CardContext";
import { WishListProvider } from "./component";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CardProvider>
        <WishListProvider>
          <App />
        </WishListProvider>
      </CardProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
