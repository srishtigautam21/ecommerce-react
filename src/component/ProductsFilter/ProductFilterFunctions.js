const getCategoryFilter = (updatedProductList, filterByCategories) => {
  if (filterByCategories.length > 0) {
    return updatedProductList.filter((product) =>
      filterByCategories.includes(product.categoryName)
    );
  } else {
    return updatedProductList;
  }
};

const getRatingFilter = (categoryFilterData, filterByRatingSlider) => {
  if (filterByRatingSlider === 0) {
    return categoryFilterData;
  } else {
    return categoryFilterData.filter(
      (product) => product.ratings === filterByRatingSlider
    );
  }
};

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
