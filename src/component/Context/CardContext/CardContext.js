import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import axios from "axios";

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

  useEffect(() => {
    filterDispatch({ type: "initializer", payload: products });
  }, [products]);

  const initialFilterState = {
    sortByPrice: "none",
    filterByCategories: [],
    filterByRatingSlider: 0,
    updatedProductList: products,
  };

  const [filterState, filterDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "initializer":
        return {
          ...state,

          updatedProductList: action.payload,
        };
      case "SORTING_BY_PRICE":
        return {
          ...state,
          sortByPrice: action.payload,
        };
      case "FILTER_BY_CATEGORY":
        return {
          ...state,
          filterByCategories: state.filterByCategories.includes(action.payload)
            ? state.filterByCategories.filter((i) => i !== action.payload)
            : [...state.filterByCategories, action.payload],
        };
      case "FILTER_BY_RATING_SLIDER":
        return {
          ...state,
          filterByRatingSlider: action.payload,
        };
      case "CLEAR_ALL":
        return {
          ...action.payload,
          updatedProductList: [...state.updatedProductList],
        };
      case "SET_CATEGORY_FROM_HOME":
        return {
          ...state,

          filterByCategories: [action.payload],
        };

      default:
        return [...action.payload];
    }
  }, initialFilterState);

  return (
    <CardContext.Provider
      value={{
        products,
        filterDispatch,
        filterState,
        initialFilterState,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

const useCard = () => useContext(CardContext);
export { useCard, CardProvider };
