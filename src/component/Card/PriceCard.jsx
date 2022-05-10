import "./horizontalCard.css";
import { Link } from "react-router-dom";

const PriceCard = ({ state }) => {
  const { cartlistitem } = state;

  const initialPriceState = {
    qty: 0,
    price: 0,
    discount: 0,
  };

  const priceCard = cartlistitem.reduce(
    (acc, currCard) => ({
      ...acc,
      qty: acc.qty + currCard.qty,
      price: acc.price + currCard.price * currCard.qty,
      discount: currCard.discount
        ? acc.discount +
          (currCard.priceBeforeDiscount - currCard.price) * currCard.qty
        : 0,
    }),
    initialPriceState
  );
  console.log(priceCard.discount);
  const deliveryCost = priceCard.price < 1000 ? 100 : 0;
  const priceAfterDiscount = priceCard.price + deliveryCost;

  return (
    <>
      {cartlistitem.length && (
        <div className='price-details-container'>
          <h3>Price Details</h3>
          <small>Free delivery for order above Rs.1000</small>
          <div className='divider'></div>
          <div className='price-card-flex'>
            <p className='m-sm'>Price (Items {priceCard.qty})</p>

            <p className='m-sm'>Rs.{priceCard.price + priceCard.discount}</p>
          </div>
          <div className='price-card-flex'>
            <p className='m-sm'>Discount</p>

            <p className='m-sm'>-Rs.{priceCard.discount}</p>
          </div>
          <div className='price-card-flex'>
            <p className='m-sm'>Delivery</p>
            <p className='m-sm'>Rs.{deliveryCost}</p>
          </div>
          <div className='divider'></div>
          <div className='price-card-flex'>
            <h3>Total Amount</h3>

            <h3>Rs.{priceAfterDiscount}</h3>
          </div>
          <div className='divider'></div>
          <p className='m-sm'>
            You will save Rs.{priceCard.discount} on this purchase
          </p>
          <Link to='/checkout'>
            <button className='button order-btn'>Procced To Checkout</button>
          </Link>
        </div>
      )}
    </>
  );
};

export { PriceCard };
