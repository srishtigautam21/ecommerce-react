// import { products } from "../backend/db/products";
import { useCard } from "../component/index";

const filterReducer = (filterState, action) => {
  // console.log(filterState.categoriesCheckBox);
  const { products, filterDispatch } = useCard();
  filterState.updatedProductList = products;

  switch (action.type) {
    case "SORTING_BY_PRICE":
      return {
        ...filterState,
        sortByPrice: action.payload,
        // updatedProductList:
        //   filterState.filterRadioButton === "LOW_TO_HIGH"
        //     ? [
        //         ...filterState.updatedProductList,
        //         products.price.sort((prod1, prod2) => prod1 - prod2),
        //       ]
        //     : [
        //         ...filterState.updatedProductList,
        //         products.price.sort((prod1, prod2) => prod2 - prod1),
        //       ],
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...filterState,
        filterByCategories: filterState.filterByCategories.includes(
          action.payload
        )
          ? filterState.filterByCategories.filter((i) => i !== action.payload)
          : [...filterState.filterByCategories, action.payload],
      };
    case "FILTER_BY_RATING_SLIDER":
      return {
        ...filterState,
        filterByRatingSlider: action.payload,
      };
    case "CLEAR_ALL":
      return {
        ...action.payload,
        updatedProductList: updatedProductList,
      };
    case "SET_CATEGORY_FROM_HOME":
      return {
        ...initialFilterState,
        updatedProductList: updatedProductList,
        filterByCategories: [action.payload],
      };
    default:
      return filterState;
  }
};
export { filterReducer };
