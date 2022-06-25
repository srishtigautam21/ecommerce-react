import "./orderCard.css";

const OrdersCard = ({ item }) => {
  return (
    <div className='small-horizontal-card'>
      <img
        className='orders-image'
        src={item.smallImage}
        alt={item.shortName}
      />
      <div className='small-horizonrtal-card-content'>
        <div className='order-item-header'>{item.shortName}</div>
        <div className='order-text'>Quantity: {item.qty}</div>
        <div className='order-text'>Price: {item.price * item.qty}</div>
      </div>
      <div className='total-amount'>
        <div>{}</div>
      </div>
    </div>
  );
};
export { OrdersCard };
