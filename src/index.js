import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import { WishListProvider, CartProvider, CardProvider } from "./component";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CardProvider>
        <WishListProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </WishListProvider>
      </CardProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
