import { createContext, useContext } from "react";
import { products } from "../../../backend/db/products";

const CardContext = createContext({});

const CardProvider = ({ children }) => {
  return (
    <CardContext.Provider value={{ products }}>{children}</CardContext.Provider>
  );
};

const useCard = () => useContext(CardContext);
export { useCard, CardProvider };
