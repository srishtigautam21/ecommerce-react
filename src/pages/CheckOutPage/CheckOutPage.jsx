import "./checkOutPage.css";
import { useCart, OrderDetailsCard, useAuth, useOrder } from "../../component";
import { orderSuccessToast } from "../../utility/Toastify";
import { useNavigate } from "react-router-dom";
import { usePrice } from "../../component";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const { cartlistitem } = state;
  const { userData } = useAuth();
  const { placeOrder } = useOrder();
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

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const placeOrderHandler = async (totalAmount) => {
    const res = await initializeRazorpay();

    if (!res) {
      errorToast("Some Unwanted error occured");
      return;
    }

    const options = {
      key: "rzp_test_07hAh0N3disI2n",
      currency: "INR",
      amount: totalAmount * 100,
      name: "nurish",
      description: "An e-commerce application for healthy groceries",
      handler: function (response) {
        if (response && response.razorpay_payment_id) {
          const order = {
            items: cartlistitem.map((item) => ({
              qty: item.qty,
              name: item.shortName,
              image: item.smallImage,
              price: item.price,
            })),
            amount: totalAmount,

            paymentId: response.razorpay_payment_id,
          };
          console.log("success");
          placeOrder(order);

          (cartlistitem.length = 0), setCoupon("");
          setIsCorrectCoupan(false);
          orderSuccessToast("Order has been placed succesfully");
          navigate("/orders");
        }
      },
      prefill: {
        name: userData.firstName,
        email: userData.email,
        contact: 99999000,
        method: "netbanking",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

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
            <div className='order-header'>{totalAmount}</div>
          ) : (
            <div className='order-header'>{totalAmount}</div>
          )}
        </div>
        <button
          className='button card-button ecom-card-button'
          onClick={() => {
            placeOrderHandler(totalAmount);
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
export { CheckOutPage };
