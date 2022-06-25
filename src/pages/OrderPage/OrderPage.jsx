import { Link } from "react-router-dom";
import { useCart } from "../../component";
import { OrdersCard } from "../../component";
import "./orderPage.css";
import { usePrice } from "../../component/index";

const OrderPage = () => {
  const { state } = useCart();
  const { cartlistitem } = state;
  const orderListItems = [...cartlistitem];
  const { totalAmount } = usePrice();
  return (
    <div className='profile-page'>
      <div className='price-details-container'>
        <h3>Account Details</h3>
        <div className='divider'></div>
        <Link className='link link-color' to='/profile'>
          Profile
        </Link>

        <div className='divider'></div>
        <p>Address</p>
        <div className='divider'></div>
        <Link className='link link-color' to='/orders'>
          My Orders
        </Link>
      </div>

      <div className='orders-container'>
        <h4>My Orders</h4>
        <div className='divider'></div>
        {orderListItems.map((item) => (
          <OrdersCard key={item._id} item={item} />
        ))}
        <div className='total-amount'>
          {orderListItems.length === 0 ? (
            <div>
              No orders yet.Check out <Link to='/products'>products.</Link>
            </div>
          ) : (
            <div>Total Amount : {totalAmount}</div>
          )}
        </div>
      </div>
    </div>
  );
};
export { OrderPage };
