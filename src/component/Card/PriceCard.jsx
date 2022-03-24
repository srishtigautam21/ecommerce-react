import "./horizontalCard.css";
const PriceCard = ({ state }) => {
  const { cartlistitem } = state;
  const initialPriceState = {
    qty: 0,
    price: 0,
    deliveryCost: 0,
    discount: 0,
  };
  // console.log(cartlistitem.price);
  const priceCard = cartlistitem.reduce(
    (acc, currCard) => ({
      ...acc,
      qty: acc.qty + currCard.cartqty,
      price: acc.price + currCard.price * currCard.cartqty,
    }),
    initialPriceState
  );
  // console.log(initialPriceState.qty, initialPriceState.price);
  return (
    <>
      {cartlistitem.length && (
        <div className='price-details-container'>
          <h3>Price Details</h3>
          <div className='divider'></div>
          <div className='price-card-flex'>
            <p className='m-sm'>Price</p>
            <p className='m-sm'>Rs.{priceCard.price}</p>
          </div>
          <div className='price-card-flex'>
            <p className='m-sm'>Discount</p>
            <p className='m-sm'>-Rs.0</p>
          </div>
          <div className='price-card-flex'>
            <p className='m-sm'>Delivery</p>
            <p className='m-sm'>Rs.0</p>
          </div>
          <div className='divider'></div>
          <div className='price-card-flex'>
            <h3>Total Amount</h3>
            <h3>Rs.{priceCard.price}</h3>
          </div>
          <div className='divider'></div>
          <p className='m-sm'>You will save Rs.0 on this purchase</p>
          <button className='button order-btn'>Place Order</button>
        </div>
      )}
    </>
  );
};

export { PriceCard };
