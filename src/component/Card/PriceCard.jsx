import "./horizontalCard.css";
const PriceCard = ({ state }) => {
  const { cartlistitem } = state;
  const initialPriceState = {
    qty: 0,
    price: 0,
    deliveryCost: 0,
    discount: 0,
    priceAfterDiscount: 0,
  };
  // console.log(cartlistitem.price);
  const priceCard = cartlistitem.reduce(
    (acc, currCard) => ({
      ...acc,
      qty: acc.qty + currCard.cartqty,
      deliveryCost: acc.deliveryCost + currCard.cartqty * 10,
      price: acc.price + currCard.price * currCard.cartqty,
    }),
    initialPriceState
  );
  // currCard.cartqty * 10
  const discountedPriceCard = cartlistitem.reduce(
    (acc, currCard) => ({
      ...acc,
      qty: acc.qty + currCard.cartqty,
      deliveryCost: acc.deliveryCost + currCard.cartqty * 10,
      price: acc.price + currCard.priceBeforeDiscount * currCard.cartqty,
      discount:
        acc.discount +
        (currCard.priceBeforeDiscount - currCard.price) * currCard.cartqty,
      priceAfterDiscount:
        acc.priceAfterDiscount +
        currCard.price * currCard.cartqty +
        currCard.cartqty * 10,
    }),
    initialPriceState
  );

  return (
    <>
      {cartlistitem.length && (
        <div className='price-details-container'>
          <h3>Price Details</h3>
          <div className='divider'></div>
          <div className='price-card-flex'>
            <p className='m-sm'>Price</p>

            {cartlistitem.discount ? (
              <p className='m-sm'>Rs.{discountedPriceCard}</p>
            ) : (
              <p className='m-sm'>Rs.{priceCard.price}</p>
            )}
          </div>
          <div className='price-card-flex'>
            <p className='m-sm'>Discount</p>
            {cartlistitem.discount ? (
              <p className='m-sm'>-Rs.{priceCard.discount.price}</p>
            ) : (
              <p className='m-sm'>-Rs.0</p>
            )}
          </div>
          <div className='price-card-flex'>
            <p className='m-sm'>Delivery</p>
            <p className='m-sm'>Rs.{priceCard.deliveryCost}</p>
          </div>
          <div className='divider'></div>
          <div className='price-card-flex'>
            <h3>Total Amount</h3>
            {cartlistitem.discount ? (
              <h3>Rs.{discountedPriceCard.priceAfterDiscount}</h3>
            ) : (
              <h3>Rs.{priceCard.price + priceCard.deliveryCost}</h3>
            )}
          </div>
          <div className='divider'></div>
          <p className='m-sm'>
            You will save Rs.{priceCard.discount} on this purchase
          </p>
          <button className='button order-btn'>Place Order</button>
        </div>
      )}
    </>
  );
};

export { PriceCard };
