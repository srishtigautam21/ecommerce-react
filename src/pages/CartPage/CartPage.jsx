import { CartPageCard, useCart, PriceCard } from "../../component";

const CartPage = () => {
  const { state, dispatch } = useCart();
  const { cartlistitem } = state;

  return (
    <>
      <h1 className='cart-page-header'>My Cart</h1>
      <h2 className='cart-page-header'>
        Your Cart has {cartlistitem.length} Items
      </h2>
      <main className='cart-page-container'>
        <div className='horizontal-cards'>
          {state.cartlistitem.map((item) => {
            return (
              <CartPageCard
                key={item._id}
                product={item}
                state={state}
                dispatch={dispatch}
              />
            );
          })}
        </div>
        {state.cartlistitem.length > 0 && <PriceCard state={state} />}
      </main>
    </>
  );
};
export { CartPage };
