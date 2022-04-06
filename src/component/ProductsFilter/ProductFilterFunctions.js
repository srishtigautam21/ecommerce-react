/***
 * This function filters products based on categories
 * @params - array of products and array of category filter selected by user
 * @return - filtered products based on categories
 *
 */

const getCategoryFilter = (updatedProductList, filterByCategories) => {
  if (filterByCategories.length > 0) {
    return updatedProductList.filter((product) =>
      filterByCategories.includes(product.categoryName)
    );
  } else {
    return updatedProductList;
  }
};

/***
 * This function filters products based on ratingsSlider
 * @params - array of products  and rating selected by user
 * @return - filtered products based on ratings
 *
 */

const getRatingFilter = (categoryFilterData, filterByRatingSlider) => {
  if (filterByRatingSlider === 0) {
    return categoryFilterData;
  } else {
    return categoryFilterData.filter(
      (product) => product.ratings <= filterByRatingSlider
    );
  }
};

/***
 * This function filters products based on price
 * @params - array of products and "high to low" or "low to high" input selected by user
 * @return - filtered products based on price
 *
 */

const getPricingFilter = (ratingFilterData, sortByPrice) => {
  if (sortByPrice === "lowToHigh") {
    return ratingFilterData.sort((prod1, prod2) => prod1.price - prod2.price);
  } else if (sortByPrice === "highToLow") {
    return ratingFilterData.sort((prod1, prod2) => prod2.price - prod1.price);
  } else {
    return ratingFilterData;
  }
};

export { getCategoryFilter, getRatingFilter, getPricingFilter };
