import "./App.css";
import { Navbar, Footer } from "./component";
import { HomePage, ProductPage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
