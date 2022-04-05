import { useCard } from "../component/index";
import {
  getCategoryFilter,
  getRatingFilter,
  getPricingFilter,
} from "../component/ProductsFilter/ProductFilterFunctions";

/**
 * custom hook to filter data based on user input
 *
 * @param 1.Output from previous function call   2.Filter selected by the user
 * @returns Final data after all filters are applied
 *
 */

const useFilterHook = () => {
  const { filterState } = useCard();

  const {
    sortByPrice,
    filterByCategories,
    filterByRatingSlider,
    updatedProductList,
  } = filterState;

  const filteredData = [...updatedProductList];

  const categoryFilterData = getCategoryFilter(
    filteredData,
    filterByCategories
  );

  const ratingFilterData = getRatingFilter(
    categoryFilterData,
    filterByRatingSlider
  );

  const pricingFilterData = getPricingFilter(ratingFilterData, sortByPrice);

  if (pricingFilterData.length === 0) {
    return updatedProductList;
  }
  return pricingFilterData; //Final data after all filters are applied
};
export { useFilterHook };
