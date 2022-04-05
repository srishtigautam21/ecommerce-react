import { useWishList, useCart } from "../index";
import "./horizontalCard.css";
import { wishListToast } from "../../utility/Toastify";

const CartPageCard = ({ product, dispatch, state }) => {
  const { cartCount, cartlistitem, productCount } = state;
  const {
    setWishList,
    wishlist,
    addToWishListApi,
    wishListState,
    removeFromWishListApi,
  } = useWishList();
  const { wishlistitem } = wishListState;
  const { deleteFromCart, increaseQuantity, decreaseQuantity } = useCart();

  // console.log("In cartPage cart", cartlistitem);

  const isProdInWishList = wishlistitem.findIndex(
    (prod) => prod._id === product._id
  );
  const moveToWishListHandler = (product) => {
    // const isProdInWishList = wishlistitem.findIndex(
    //   (prod) => prod._id === product._id
    // );
    deleteFromCart(_id);
    addToWishListApi(product);
  };

  // dispatch({ type: "REMOVE_FROM_CART", productCard: product });
  // dispatch({ type: "MOVE_TO_WISHLIST", productCard: product });
  // setWishList((prev) => {
  //   const index = prev.wishlistitem.findIndex((i) => i._id === product._id);
  //   return index === -1 //If item is not in wishlist
  //     ? {
  //         ...prev,
  //         wishListCount: prev.wishListCount + 1,
  //         wishlistitem: [...prev.wishlistitem, product],
  //       }
  //     : {
  //         ...prev,
  //         wishListCount: prev.wishListCount - 1,
  //         wishlistitem: prev.wishlistitem.filter(
  //           (i) => i._id !== product._id
  //         ),
  //       };
  // });

  const {
    _id,
    name,
    price,
    cartqty,
    image,
    discount,
    priceBeforeDiscount,
    discPerc,
    categoryName,
    ratings,
    sale,
    isOutOfStock,
    newItem = false,
  } = product;
  return (
    <>
      <div className='h-card-container'>
        <img src={image} alt={name} />
        <div className='h-card-inside-content'>
          <h3>{name}</h3>
          <p>
            <span className='card-item-cost margin-top margin'>Rs.{price}</span>
            {discount && (
              <>
                <span className='overline-text margin'>
                  Rs.{priceBeforeDiscount}
                </span>
                <span className='sale-perct'>{discPerc}% Off</span>
              </>
            )}
          </p>
          <div className='quantity'>
            <p className='quant-font-size'>Quantity</p>
            <div className='plus-minus-button'>
              <button
                onClick={
                  product.qty > 1 //0
                    ? () => decreaseQuantity(_id)
                    : () => deleteFromCart(_id)
                }
                className='q-circle-btn'
              >
                {/* dispatch({
                          type: "REMOVE_FROM_CART",
                          productCard: product,
                        }) */}
                {/* dispatch({ type: "DECREMENT", productCard: product }) */}
                <i className='fa fa-minus'></i>
              </button>
              <p className='q-num-box'>{product.qty}</p>
              {/* {cartqty} */}
              <button
                onClick={() => increaseQuantity(_id)}
                className='q-circle-btn'
              >
                {/* dispatch({ type: "INCREMENT", productCard: product }) */}
                <i className='fa fa-plus'></i>
              </button>
            </div>
          </div>
          {isProdInWishList === -1 ? (
            <button
              className='button cart-btn'
              onClick={() => moveToWishListHandler(product)}
            >
              Move to Wishlist
            </button>
          ) : (
            <button
              className='button outline-button cart-btn'
              onClick={() => removeFromWishListApi(_id)}
            >
              Remove From WishList
            </button>
          )}
          {/* // <button
          //   className='button cart-btn'
          //   onClick={() => moveToWishListHandler(product)}
          // >
          //   Move to Wishlist
          // </button> */}
          <button
            className='button outline-button cart-btn'
            onClick={() => deleteFromCart(_id)}
          >
            Remove From Cart
            {/* dispatch({ type: "REMOVE_FROM_CART", productCard: product }) */}
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export { CartPageCard };
{
  /* <h1 className='cart-page-header'>My Cart</h1>
      <h2 className='cart-page-header'>Your Cart has {cartCount} Items</h2>
      <main className='cart-page-container'>
        <div className='horizontal-cards'> */
}
