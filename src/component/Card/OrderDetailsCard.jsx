import "./orderDetailsCard.css";

const OrderDetailsCard = ({ product, priceCard }) => {
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
  const deliveryCost = priceCard.price < 1000 ? 100 : 0;
  const priceAfterDiscount = priceCard.price + deliveryCost;
  return (
    <div className='order-card-flex-1'>
      <div className='order-card-flex-2'>
        <div className='order-header'>S.No.</div>
        <div className='order-header'>{product.shortName}</div>
      </div>
      <div className='order-card-flex-2'>
        <div className='order-header order-lg-pd'>{priceCard.qty}</div>
        <div className='order-header order-lg-pd'>{product.price}</div>

        <div className='order-header'>{priceCard.price}</div>
      </div>
    </div>
  );
};
export { OrderDetailsCard };
