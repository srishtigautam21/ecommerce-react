import "./orderDetailsCard.css";

const OrderDetailsCard = ({ product, index }) => {
  //   const priceCard = cartlistitem.reduce(
  //     (acc, currCard) => ({
  //       ...acc,
  //       qty: acc.qty + currCard.qty,
  //       price: acc.price + currCard.price * currCard.qty,
  //       discount: currCard.discount
  //         ? acc.discount +
  //           (currCard.priceBeforeDiscount - currCard.price) * currCard.qty
  //         : 0,
  //     }),
  //     initialPriceState
  //   );

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
