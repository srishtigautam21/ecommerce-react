import "./horizontalCard.css";
const PriceCard = ({ state }) => {
  const { cartlistitem } = state;
  console.log("In price card", cartlistitem);
  const initialPriceState = {
    qty: 0,
    price: 0,
    deliveryCost: 0,
    discount: 0,
    // priceAfterDiscount: 0,
  };

  const priceCard = cartlistitem.reduce(
    (acc, currCard) => ({
      ...acc,
      qty: acc.qty + currCard.qty,
      deliveryCost: acc.deliveryCost + currCard.qty * 10,
      price: acc.price + currCard.price * currCard.qty,
    }),
    initialPriceState
  );

  const discountedPriceCard = cartlistitem.reduce(
    (acc, currCard) => ({
      ...acc,
      // qty: acc.qty + currCard.qty,
      // deliveryCost: acc.deliveryCost + currCard.qty * 10,
      // price: acc.price + currCard.priceBeforeDiscount * currCard.qty,
      discount:
        acc.discount +
        (currCard.priceBeforeDiscount - currCard.price) * currCard.qty,
      // priceAfterDiscount:
      //   acc.priceAfterDiscount +
      //   (currCard.price - currCard.discount) * currCard.qty +
      //   currCard.qty * 10,
    }),
    initialPriceState
  );
  console.log(discountedPriceCard);
  return (
    <>
      {cartlistitem.length && (
        <div className='price-details-container'>
          <h3>Price Details</h3>
          <div className='divider'></div>
          <div className='price-card-flex'>
            <p className='m-sm'>Price</p>

            {cartlistitem.discount ? (
              <p className='m-sm'>Rs.{discountedPriceCard.price}</p>
            ) : (
              <p className='m-sm'>Rs.{priceCard.price}</p>
            )}
          </div>
          <div className='price-card-flex'>
            <p className='m-sm'>Discount</p>
            {discountedPriceCard.discount ? (
              <p className='m-sm'>-Rs.{discountedPriceCard.discount}</p>
            ) : (
              // {priceCard.discount.price}
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
            {cartlistitem.discount === true ? (
              <h3>
                Rs.
                {discountedPriceCard.priceAfterDiscount +
                  priceCard.deliveryCost}
              </h3>
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
