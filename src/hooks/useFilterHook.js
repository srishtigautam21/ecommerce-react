import { useCard } from "../component/index";
import {
  getCategoryFilter,
  getRatingFilter,
  getPricingFilter,
} from "../component/ProductsFilter/ProductFilterFunctions";

const useFilterHook = () => {
  const { filterState } = useCard();
  const {
    sortByPrice,
    filterByCategories,
    filterByRatingSlider,
    updatedProductList,
  } = filterState;

  const categoryFilterData = getCategoryFilter(
    updatedProductList,
    filterByCategories
  );

  const ratingFilterData = getRatingFilter(
    categoryFilterData,
    filterByRatingSlider
  );

  const pricingFilterData = getPricingFilter(ratingFilterData, sortByPrice);

  return { finalDataAfterFilter: pricingFilterData };
};
export { useFilterHook };
