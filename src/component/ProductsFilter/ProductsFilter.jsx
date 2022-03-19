import "./productFilter.css";

const ProductsFilter = () => {
  return (
    <>
      <div className='sidebar-header'>
        <h2>Filters</h2>
        <p className='md-margin'>Clear</p>
      </div>
      <h3>Price</h3>
      <div className='filter'>
        <label htmlFor='radio-1'>
          <input
            className='margin'
            id='radio-1'
            name='radio'
            type='radio'
            onClick={() =>
              dispatch({ type: "SORTING", payload: "low to high" })
            }
          />
          Low to High
        </label>
        <label htmlFor='radio-2'>
          <input
            className='margin'
            id='radio-2'
            name='radio'
            type='radio'
            onClick={() =>
              dispatch({ type: "SORTING", payload: "high to low" })
            }
          />
          High to Low
        </label>
      </div>
      <h3>Category</h3>
      <div className='filter'>
        <label htmlFor='checkbox-1'>
          <input
            className='margin'
            id='checkbox-1'
            name='checkbox'
            type='checkbox'
            onClick={() => dispatch({ type: "GRAINS" })}
          />
          Grains
        </label>
        <label htmlFor='checkbox-2'>
          <input
            className='margin'
            id='checkbox-2'
            name='checkbox'
            type='checkbox'
            onClick={() => dispatch({ type: "NUTS" })}
          />
          Nuts
        </label>
        <label htmlFor='checkbox-3'>
          <input
            className='margin'
            id='checkbox-3'
            name='checkbox'
            type='checkbox'
            onClick={() => dispatch({ type: "SEEDS" })}
          />
          Seeds
        </label>
        <label htmlFor='checkbox-4'>
          <input
            className='margin'
            id='checkbox-4'
            name='checkbox'
            type='checkbox'
            onClick={() => dispatch({ type: "FRUITS" })}
          />
          Fruits
        </label>
        <label htmlFor='checkbox-5'>
          <input
            className='margin'
            id='checkbox-5'
            name='checkbox'
            type='checkbox'
            onClick={() => dispatch({ type: "VEGETABLES" })}
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
          value='3'
        ></input>
      </label>
    </>
  );
};

export { ProductsFilter };
