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
        <label htmlFor='lowToHigh'>
          <input
            className='margin'
            id='lowToHigh'
            name='radio-lowToHigh'
            type='radio'
          />
          Low to High
        </label>
        <label htmlFor='highToLow'>
          <input
            className='margin'
            id='highToLow'
            name='radio-highToLow'
            type='radio'
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
          />
          Grains
        </label>
        <label htmlFor='nuts'>
          <input
            className='margin'
            id='nuts'
            name='checkbox-nuts'
            type='checkbox'
          />
          Nuts
        </label>
        <label htmlFor='seeds'>
          <input
            className='margin'
            id='seeds'
            name='checkbox-seeds'
            type='checkbox'
          />
          Seeds
        </label>
        <label htmlFor='fruits'>
          <input
            className='margin'
            id='fruits'
            name='checkbox-fruits'
            type='checkbox'
          />
          Fruits
        </label>
        <label htmlFor='vegetables'>
          <input
            className='margin'
            id='vegetables'
            name='checkbox-vegetables'
            type='checkbox'
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
        ></input>
      </label>
    </>
  );
};

export { ProductsFilter };
