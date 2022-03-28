import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import axios from "axios";
import { filterReducer } from "../../../reducer/filterReducer";

const CardContext = createContext({});

const CardProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // API call
  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data.products);
    })();
  }, []);

  const initialFilterState = {
    sortByPrice: "none",
    filterByCategories: [],
    filterByRatingSlider: 0,
    updatedProductList: [],
  };
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  return (
    <CardContext.Provider
      value={{ products, filterState, filterDispatch, initialFilterState }}
    >
      {children}
    </CardContext.Provider>
  );
};

const useCard = () => useContext(CardContext);
export { useCard, CardProvider };
