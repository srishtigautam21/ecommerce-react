import "./horizontalCard.css";

const CartPageCard = ({ product, dispatch, state }) => {
  const { cartCount, cartlistitem, productCount } = state;
  console.log(cartlistitem);
  const {
    _id,
    name,
    price,
    cartqty,
    image,
    discount,
    priceBeforeDiscount,
    discPerc,
    categoryName,
    ratings,
    sale,
    isOutOfStock,
    newItem = false,
  } = product;
  return (
    <>
      <div className='h-card-container'>
        <img src={image} alt={name} />
        <div className='h-card-inside-content'>
          <h3>{name}</h3>
          <p className='card-item-cost margin-top'>Rs.{price}</p>
          <div className='quantity'>
            <p className='quant-font-size'>Quantity</p>
            <div className='plus-minus-button'>
              <button
                onClick={() => dispatch({ type: "DECREMENT", payload: price })}
                className='q-circle-btn'
              >
                <i className='fa fa-minus'></i>
              </button>
              <p className='q-num-box'>{cartqty}</p>
              <button
                onClick={() => dispatch({ type: "INCREMENT", payload: price })}
                className='q-circle-btn'
              >
                <i className='fa fa-plus'></i>
              </button>
            </div>
          </div>
          <button className='button cart-btn'>Move to Wishlist</button>
          <button className='button outline-button cart-btn'>
            Remove From Cart
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export { CartPageCard };
{
  /* <h1 className='cart-page-header'>My Cart</h1>
      <h2 className='cart-page-header'>Your Cart has {cartCount} Items</h2>
      <main className='cart-page-container'>
        <div className='horizontal-cards'> */
}
