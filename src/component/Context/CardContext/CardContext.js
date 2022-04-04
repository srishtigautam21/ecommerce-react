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

  // const encodedToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjk3NGRmNS03MDQ5LTQwY2ItYmE5MC1jZmY0NjVmYmViY2MiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.zzeQ44lCp-hbuV2W9HzUEzk2kFf7NcU2SWWQpGsio8Q";

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

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjk3NGRmNS03MDQ5LTQwY2ItYmE5MC1jZmY0NjVmYmViY2MiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.zzeQ44lCp-hbuV2W9HzUEzk2kFf7NcU2SWWQpGsio8Q"
