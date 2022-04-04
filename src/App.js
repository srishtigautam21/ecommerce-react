import "./App.css";
import { Navbar, Footer } from "./component";
import {
  HomePage,
  ProductPage,
  WishList,
  CartPage,
  LoginPage,
  SignUpPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Mockman from "mockman-js";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/mockman' element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
