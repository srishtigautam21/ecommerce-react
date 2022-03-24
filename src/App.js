import "./App.css";
import { Navbar, Footer } from "./component";
import { HomePage, ProductPage, WishList, CartPage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
