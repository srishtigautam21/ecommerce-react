import "./card.css";

const Card = ({
  product: {
    _id,
    name,
    price,
    image,
    discount,
    priceBeforeDiscount,
    discPerc,
    categoryName,
    ratings,
    sale,
    isOutOfStock,
    newItem = false,
  },
}) => {
  return (
    <div
      className={
        isOutOfStock
          ? `text-overlay-card card-width card-container  bottom-margin`
          : `card-container  bottom-margin`
      }
    >
      <div className='parent-positioning'>
        <img src={image} alt='quinoa-image'></img>
        <div className='inside-container '>
          <h3>{name}</h3>
          <span className='card-content'>{categoryName}</span>
          <p>
            <span className='card-item-cost margin'>Rs.{price}</span>
            {discount && (
              <>
                <span className='overline-text margin'>
                  Rs.{priceBeforeDiscount}
                </span>
                <span className='sale-perct'>{discPerc}% Off</span>
              </>
            )}
          </p>
          <div className='rating-xs-margin'>
            {ratings}
            <span className='fa fa-star checked'></span>
            <span className='xs-margin'>|</span>5
          </div>
          <button className='button card-button ecom-card-button'>
            Add to Cart
          </button>
          {isOutOfStock && (
            <span className='overlay-text overlay-text-alignment'>
              Out of Stock
            </span>
          )}
          <span className='badge-overlay'>
            {newItem === true ? "New" : sale === true ? "Sale" : null}
          </span>
          <i className='fa fa-heart-o icon-btn icon-size icon-overlay'></i>
        </div>
      </div>
    </div>
  );
};
export { Card };
