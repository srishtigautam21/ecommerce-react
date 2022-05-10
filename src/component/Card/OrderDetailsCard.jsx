import "./orderDetailsCard.css";

const OrderDetailsCard = ({ product, index }) => {
  return (
    <>
      <div className='order-card-flex-1'>
        <div className='order-card-flex-2'>
          <div className='order-header'>{index + 1}.</div>
          <div className='order-header  item-width'>
            <p className='text-in-wrapper'>{product.shortName}</p>
          </div>
        </div>
        <div className='order-card-flex-2'>
          <div className='order-header order-lg-pd'>{product.qty}</div>
          <div className='order-header order-lg-pd'>{product.price}</div>
          <div className='order-header'>{product.price * product.qty}</div>
        </div>
      </div>
    </>
  );
};
export { OrderDetailsCard };
