import "./App.css";
import { Navbar, Footer, Loading } from "./component";
import {
  HomePage,
  ProductPage,
  WishList,
  CartPage,
  LoginPage,
  SignUpPage,
  Page404,
  ProfilePage,
  CheckOutPage,
  OrderPage,
} from "./pages";

import { RequireAuth } from "./utility/RequireAuth";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./toastify.css";
import Mockman from "mockman-js";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ToastContainer />
      <Loading />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />

        <Route
          path='/wishlist'
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route
          path='/cart'
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path='/orders'
          element={
            <RequireAuth>
              <OrderPage />
            </RequireAuth>
          }
        />
        <Route
          path='/checkout'
          element={
            <RequireAuth>
              <CheckOutPage />
            </RequireAuth>
          }
        />

        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
