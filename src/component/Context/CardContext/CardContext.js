import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import axios from "axios";
// import { filterReducer } from "../../../reducer/filterReducer";

const CardContext = createContext({});

const filterReducer = (filterState, action) => {
  // const { products } = useCard();

  // console.log("reducer", filterState, action);

  // console.log(filterState.updatedProductList);

  switch (action.type) {
    // case "SORTING_BY_PRICE":
    //   return {
    //     ...filterState,
    //     sortByPrice: action.payload,
    //   };
    // case "FILTER_BY_CATEGORY":
    //   return {
    //     ...filterState,
    //     filterByCategories: filterState.filterByCategories.includes(
    //       action.payload
    //     )
    //       ? filterState.filterByCategories.filter((i) => i !== action.payload)
    //       : [...filterState.filterByCategories, action.payload],
    //   };
    // case "FILTER_BY_RATING_SLIDER":
    //   return {
    //     ...filterState,
    //     filterByRatingSlider: action.payload,
    //   };
    // case "CLEAR_ALL":
    //   return {
    //     ...action.payload,
    //     updatedProductList: updatedProductList,
    //   };
    // case "SET_CATEGORY_FROM_HOME":
    //   return {
    //     ...initialFilterState,
    //     updatedProductList: updatedProductList,
    //     filterByCategories: [action.payload],
    //   };
    default:
      return filterState;
  }
};

const CardProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // API call
  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data.products);
    })();
  }, []);

  // console.log(products);

  useEffect(() => {
    // console.log("inside effect", products);
    // filterDispatch({ type: "abcd", payload: products });
    filterDispatch({ type: "initializer", payload: products });
  }, [products]);

  // console.log(products);

  const initialFilterState = {
    sortByPrice: "none",
    filterByCategories: [],
    filterByRatingSlider: 0,
    updatedProductList: products,
  };
  // console.log(initialFilterState);

  const [filterState, filterDispatch] = useReducer((state, action) => {
    console.log("inside Reducer", action);
    console.log(state);
    switch (action.type) {
      case "initializer":
        return {
          ...state,
          // updatedProductList: [...action.payload],
          updatedProductList: action.payload,
          // updatedProductList: [...state.updatedProductList, action.payload],
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
        // getCategoryFilter([...updatedProductList], filterByCategories);
        return {
          ...state,
          // updatedProductList: state.updatedProductList,
          filterByCategories: [action.payload],
        };
      // [action.payload] ...initialstate,
      default:
        console.log("state", state);
        return [...action.payload];
    }
  }, initialFilterState);
  // console.log(filterState.updatedProductList);
  console.log("filter state", filterState);
  return (
    <CardContext.Provider
      value={{ products, filterDispatch, filterState, initialFilterState }}
    >
      {children}
    </CardContext.Provider>
  );
};

const useCard = () => useContext(CardContext);
export { useCard, CardProvider };
