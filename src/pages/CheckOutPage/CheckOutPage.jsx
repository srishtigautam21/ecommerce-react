import "./checkOutPage.css";
import { useCart, OrderDetailsCard } from "../../component";
const CheckOutPage = () => {
  const { state } = useCart();
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
  return (
    <div className='checkout-page'>
      <div className='checkout-container'>
        <h4>Order Details</h4>
        <div className='order-card-flex-1'>
          <div className='order-card-flex-2'>
            <div className='order-header'>S.No.</div>
            <div className='order-header'>Items</div>
          </div>
          <div className='order-card-flex-2'>
            <div className='order-header'>Quantity</div>
            <div className='order-header'>Price</div>
            <div className='order-header'>Total</div>
          </div>
        </div>
        <div className='divider'></div>
        {cartlistitem.map((item) => (
          <OrderDetailsCard
            key={item._id}
            product={item}
            priceCard={priceCard}
          />
        ))}
      </div>
    </div>
  );
};
export { CheckOutPage };
