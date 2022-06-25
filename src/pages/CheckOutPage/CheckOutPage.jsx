import "./checkOutPage.css";
import { useCart, OrderDetailsCard } from "../../component";
// import { useState } from "react";
import { orderSuccessToast } from "../../utility/Toastify";
import { useNavigate } from "react-router-dom";
import { usePrice } from "../../component";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const { cartlistitem } = state;
  const {
    coupon,
    setCoupon,
    isCorrectCoupan,
    setIsCorrectCoupan,
    checkCoupan,
    priceCard,
    coupanCost,
    deliveryCost,
    priceAfterDiscount,
    cartEmpty,
    totalAmount,
  } = usePrice();

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
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className='coupan-pd coupan-input'
              />

              <button
                className='coupan-btn coupan-pd'
                onClick={() => checkCoupan(coupon)}
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
          {isCorrectCoupan ? (
            <div className='order-header'>-{coupanCost}</div>
          ) : (
            <div className='order-header'>-0</div>
          )}
        </div>
        <div className='divider'></div>
        <div className='order-card-flex-1'>
          <div className='order-header'>Grand Total</div>
          {isCorrectCoupan ? (
            <div className='order-header'>
              {priceCard.price - coupanCost + deliveryCost}
            </div>
          ) : (
            <div className='order-header'>
              {priceCard.price - 0 + deliveryCost}
            </div>
          )}
        </div>
        <button
          className='button card-button ecom-card-button'
          onClick={() => {
            orderSuccessToast("Order has been placed succesfully");
            navigate("/orders");
            // cartEmpty(cartlistitem);
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
export { CheckOutPage };
