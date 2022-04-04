import { CartPageCard, useCart, PriceCard } from "../../component";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import "./cartPage.css";

const CartPage = () => {
  useDocumentTitle("CartPage");
  const { state, dispatch, addToCart } = useCart();
  const { cartlistitem } = state;
  console.log("On cart page", cartlistitem);
  return (
    <div className='cart-page-ht'>
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
    </div>
  );
};
export { CartPage };
