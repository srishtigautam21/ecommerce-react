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

  const isProdInWishList = wishlistitem.findIndex(
    (prod) => prod._id === product._id
  );

  const moveToWishListHandler = (product) => {
    deleteFromCart(_id);
    addToWishListApi(product);
  };

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
              {product.qty === 1 ? (
                <button
                  className='horizontal-s-pd'
                  onClick={() => deleteFromCart(_id)}
                >
                  <i className='fa fa-trash'></i>
                </button>
              ) : (
                <button
                  onClick={
                    product.qty > 1
                      ? () => decreaseQuantity(_id)
                      : () => deleteFromCart(_id)
                  }
                  className='q-circle-btn'
                >
                  <i className='fa fa-minus'></i>
                </button>
              )}
              {/* <button
                onClick={
                  product.qty > 1
                    ? () => decreaseQuantity(_id)
                    : () => deleteFromCart(_id)
                }
                className='q-circle-btn'
              >
                <i className='fa fa-minus'></i>
              </button> */}
              <p className='q-num-box'>{product.qty}</p>

              <button
                onClick={() => increaseQuantity(_id)}
                className='q-circle-btn'
              >
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

          <button
            className='button outline-button cart-btn'
            onClick={() => deleteFromCart(_id)}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
};
export { CartPageCard };
