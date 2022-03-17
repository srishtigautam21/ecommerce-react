import "./App.css";
import { Navbar, Footer } from "./component";
import { HomePage } from "./pages";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
