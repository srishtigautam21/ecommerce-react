import "./horizontalCard.css";
const PriceCard = ({ state }) => {
  const { totalPrice, cartCount, cartlistitem } = state;
  return (
    <>
      {cartlistitem.length && (
        <div className='price-details-container'>
          <h3>Price Details</h3>
          <div className='divider'></div>
          <div className='price-card-flex'>
            <p className='m-sm'>Price({cartCount} Items)</p>
            <p className='m-sm'>Rs.{totalPrice}</p>
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
            <h3>Rs.{totalPrice}</h3>
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
