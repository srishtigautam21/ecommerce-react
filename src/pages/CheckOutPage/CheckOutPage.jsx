import "./checkOutPage.css";
import { useCart, OrderDetailsCard } from "../../component";
import { useState } from "react";
const CheckOutPage = () => {
  const { state } = useCart();
  const { cartlistitem } = state;
  const [coupan, setCoupan] = useState("");
  const [isCorrectCoupan, setIsCorrectCoupan] = useState(false);
  const checkCoupan = (coupan) => {
    if (coupan === "nurish50") {
      setIsCorrectCoupan(true);
    } else {
      setIsCorrectCoupan(false);
    }
  };
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
  const coupanCost = priceCard.price * 0.5;
  const deliveryCost = priceCard.price < 1000 ? 100 : 0;
  const priceAfterDiscount = priceCard.price + deliveryCost;
  return (
    <div className='checkout-page'>
      <div className='checkout-container'>
        <h2 className='order-header-margin'>Order Details</h2>
        <div className='order-card-flex-1'>
          <div className='order-card-flex-2'>
            <div className='order-header s-width'>S.No.</div>
            <div className='order-header item-width'>
              <p>Items</p>
            </div>
          </div>
          <div className='order-card-flex-2'>
            <div className='order-header'>Quantity</div>
            <div className='order-header'>Price</div>
            <div className='order-header'>Total</div>
          </div>
        </div>
        <div className='divider'></div>
        {cartlistitem.map((item, index) => (
          <OrderDetailsCard
            key={item._id}
            index={index}
            product={item}
            priceCard={priceCard}
          />
        ))}
        <div className='divider'></div>
        {isCorrectCoupan ? (
          " "
        ) : (
          <>
            <div className='order-header left-text'>Apply Coupan</div>
            <div className='left-text'>
              Use <strong>nurish50</strong> for 50% off
            </div>
            <div className='order-card-flex-1'>
              <input
                type='text'
                value={coupan}
                onChange={(e) => setCoupan(e.target.value)}
                className='coupan-pd coupan-input'
              />

              <button
                className='coupan-btn coupan-pd'
                onClick={() => checkCoupan(coupan)}
              >
                Apply
              </button>
            </div>
          </>
        )}

        <div className='order-card-flex-1'>
          <div className='order-header'>Total</div>
          <div className='order-header'>{priceCard.price}</div>
        </div>
        <div className='divider'></div>
        <div className='order-card-flex-1'>
          <div className='order-header'>Delivery Charges</div>
          <div className='order-header'>{deliveryCost}</div>
        </div>
        <div className='order-card-flex-1'>
          <div className='order-header'>Coupon discount</div>
          <div className='order-header'>-{coupanCost}</div>
        </div>
        <div className='divider'></div>
        <div className='order-card-flex-1'>
          <div className='order-header'>Grand Total</div>
          <div className='order-header'>{priceCard.price - coupanCost}</div>
        </div>
        <button className='button card-button ecom-card-button'>
          Place Order
        </button>
      </div>
    </div>
  );
};
export { CheckOutPage };
