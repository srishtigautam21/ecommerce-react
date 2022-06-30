import "./orderCard.css";

const OrdersCard = ({ arrayOfItem }) => {
  const { qty, name, image, price } = arrayOfItem;

  return (
    <>
      {arrayOfItem.map((item, index) => {
        return (
          <div className='small-horizontal-card' key={index}>
            <img className='orders-image' src={item.image} alt={item.name} />
            <div className='small-horizonrtal-card-content'>
              <div className='order-item-header'>{item.name}</div>
              <div className='order-text'>Quantity: {item.qty}</div>
              <div className='order-text'>Price: {item.price * item.qty}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export { OrdersCard };
