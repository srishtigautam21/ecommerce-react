import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import {
  WishListProvider,
  CartProvider,
  CardProvider,
  AuthProvider,
  PriceProvider,
} from "./component";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CardProvider>
          <WishListProvider>
            <CartProvider>
              <PriceProvider>
                <App />
              </PriceProvider>
            </CartProvider>
          </WishListProvider>
        </CardProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
