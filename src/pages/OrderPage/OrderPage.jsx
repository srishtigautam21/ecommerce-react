import { Link } from "react-router-dom";
import { useCart, OrdersCard, useOrder } from "../../component";
import "./orderPage.css";

const OrderPage = () => {
  const { myOrder } = useOrder();
  const costpriceArr = myOrder.map((order) => order.amount);
  const totalPrice = costpriceArr.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className='profile-page'>
      <div className='price-details-container'>
        <h3>Account Details</h3>
        <div className='divider'></div>
        <Link className='link link-color' to='/profile'>
          Profile
        </Link>

        <div className='divider'></div>
        <Link className='link link-color' to='/orders'>
          My Orders
        </Link>
      </div>

      <div className='orders-container'>
        <h4>My Orders</h4>
        <div className='divider'></div>
        {myOrder.map((order, index) => (
          <OrdersCard key={index} arrayOfItem={order.items} />
        ))}
        <div className='total-amount'>
          {myOrder.length === 0 ? (
            <div>
              No orders yet.Check out <Link to='/products'>products.</Link>
            </div>
          ) : (
            <div>Total Amount : {totalPrice}</div>
          )}
        </div>
      </div>
    </div>
  );
};
export { OrderPage };
