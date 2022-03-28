const getCategoryFilter = (updatedProductList, filterByCategories) => {
  if (updatedProductList.lenght > 0) {
    return updatedProductList.filter((product) =>
      filterByCategories.includes(product.categoryName)
    );
  } else {
    return updatedProductList;
  }
};

const getRatingFilter = (categoryFilterData, filterByRatingSlider) => {
  return categoryFilterData.filter(
    (product) => product.ratings === filterByRatingSlider
  );
};

const getPricingFilter = (ratingFilterData, sortByPrice) => {
  return ratingFilterData.filter;
};
