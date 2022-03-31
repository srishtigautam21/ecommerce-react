import "./productFilter.css";
import { useCard } from "../index";

const ProductsFilter = () => {
  const { products, filterDispatch, filterState, initialFilterState } =
    useCard();

  return (
    <>
      <div className='sidebar-header'>
        <h2>Filters</h2>
        <button
          className='text-link md-txt txt-color md-margin'
          onClick={() =>
            filterDispatch({
              type: "CLEAR_ALL",
              payload: {
                ...initialFilterState,
              },
            })
          }
        >
          Clear
        </button>
      </div>
      <h3>Price</h3>
      <div className='filter'>
        <label htmlFor='lowToHigh'>
          <input
            className='margin'
            id='lowToHigh'
            name='radio-lowToHigh'
            type='radio'
            onChange={() =>
              filterDispatch({
                type: "SORTING_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={filterState.sortByPrice === "lowToHigh"}
          />
          Low to High
        </label>
        <label htmlFor='highToLow'>
          <input
            className='margin'
            id='highToLow'
            name='radio-highToLow'
            type='radio'
            onChange={() =>
              filterDispatch({
                type: "SORTING_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={filterState.sortByPrice === "highToLow"}
          />
          High to Low
        </label>
      </div>
      <h3>Category</h3>
      <div className='filter'>
        <label htmlFor='grains'>
          <input
            className='margin'
            id='grains'
            name='checkbox-grains'
            type='checkbox'
            checked={filterState.filterByCategories.includes("Healthy grains")}
            onChange={() =>
              filterDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "Healthy grains",
              })
            }
          />
          Grains
        </label>
        <label htmlFor='nuts'>
          <input
            className='margin'
            id='nuts'
            name='checkbox-nuts'
            type='checkbox'
            checked={filterState.filterByCategories.includes(
              "Nutritional Nuts"
            )}
            onChange={() =>
              filterDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "Nutritional Nuts",
              })
            }
          />
          Nuts
        </label>
        <label htmlFor='seeds'>
          <input
            className='margin'
            id='seeds'
            name='checkbox-seeds'
            type='checkbox'
            checked={filterState.filterByCategories.includes("Super Seeds")}
            onChange={() =>
              filterDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "Super Seeds",
              })
            }
          />
          Seeds
        </label>
        <label htmlFor='fruits'>
          <input
            className='margin'
            id='fruits'
            name='checkbox-fruits'
            type='checkbox'
            checked={filterState.filterByCategories.includes("Fruits")}
            onChange={() =>
              filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "Fruits" })
            }
          />
          Fruits
        </label>
        <label htmlFor='vegetables'>
          <input
            className='margin'
            id='vegetables'
            name='checkbox-vegetables'
            type='checkbox'
            checked={filterState.filterByCategories.includes("Vegetables")}
            onChange={() =>
              filterDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "Vegetables",
              })
            }
          />
          Vegetables
        </label>
      </div>
      <h3>Ratings</h3>
      <label htmlFor='rating-range'>
        <div className='slider-range'>
          <p className='lg-r-margin'>
            1<span className='fa fa-star checked'></span>
          </p>
          <p className='lg-r-margin'>
            3<span className='fa fa-star checked'></span>
          </p>
          <p>
            5<span className='fa fa-star checked'></span>
          </p>
        </div>
        <input
          className='rating-margin slider'
          id='rating-range'
          type='range'
          min='1'
          max='5'
          value={filterState.filterByRatingSlider}
          onChange={(e) => {
            filterDispatch({
              type: "FILTER_BY_RATING_SLIDER",
              payload: Number(e.target.value),
            });
          }}
        ></input>
      </label>
    </>
  );
};

export { ProductsFilter };
