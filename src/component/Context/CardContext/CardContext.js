import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CardContext = createContext({});

const CardProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data.products);
    })();
  }, []);
  return (
    <CardContext.Provider value={{ products }}>{children}</CardContext.Provider>
  );
};

const useCard = () => useContext(CardContext);
export { useCard, CardProvider };
