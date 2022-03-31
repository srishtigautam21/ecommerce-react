import { useCard } from "../component/index";

const filterReducer = (filterState, action) => {
  // const { products } = useCard();

  console.log("reducer", filterState, action);

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
export { filterReducer };
