import { Link } from "react-router-dom";
import { useWishList, useCart, useCard, useAuth } from "../index";
import "./card.css";

const Card = ({ product }) => {
  const {
    wishListHandler,
    addToWishListApi,
    wishListState,
    removeFromWishListApi,
  } = useWishList();
  const { state, dispatch, addToCart } = useCart();
  const { cartlistitem } = state;
  const { wishlistitem } = wishListState;
  const { isUserLoggedIn } = useAuth();

  const isInCart = cartlistitem.findIndex((prod) => prod._id === product._id);
  const isInWishList = wishlistitem.findIndex(
    (prod) => prod._id === product._id
  );

  const addToCartHandler = (product) => {
    // console.log(product);
    addToCart(product);
  };
  const {
    _id,
    name,
    price,
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
    <div
      className={
        isOutOfStock
          ? `text-overlay-card card-width card-container  bottom-margin `
          : `card-container  bottom-margin `
      }
    >
      <div className='parent-positioning '>
        <img src={image} alt={name}></img>
        <div className='inside-container '>
          <h3>{name}</h3>
          <span className='card-content'>{categoryName}</span>
          <p>
            <span className='card-item-cost margin'>Rs.{price}</span>
            {discount && (
              <>
                <span className='overline-text margin'>
                  Rs.{priceBeforeDiscount}
                </span>
                <span className='sale-perct'>{discPerc}% Off</span>
              </>
            )}
          </p>
          <div className='rating-xs-margin'>
            {ratings}
            <span className='fa fa-star checked'></span>
            <span className='xs-margin'>|</span>5
          </div>
          {isUserLoggedIn === true ? (
            isInCart === -1 ? (
              <button
                onClick={() => {
                  addToCartHandler(product);
                }}
                className='button card-button ecom-card-button'
              >
                Add To Cart
              </button>
            ) : (
              <Link to='/cart'>
                <button className='button outline-button card-button ecom-card-button'>
                  Go To Cart
                </button>
              </Link>
            )
          ) : (
            <Link to='/login'>
              <button className='button card-button ecom-card-button'>
                Add To Cart
              </button>
            </Link>
          )}
          {/* // <button
          //   onClick={() => {
          //     addToCartHandler(product);
          //   }}
          //   className='button card-button ecom-card-button'
          // > */}
          {/* dispatch({
                type: "ADD_TO_CART",
                productCard: product,
              }); */}
          {/* {isInCart === -1
              ? "Add to Cart"
              : "Go To Cart" && navigate("/cart")} */}
          {/* Add to Cart */}

          {isOutOfStock && (
            <span className='overlay-text overlay-text-alignment'>
              Out of Stock
            </span>
          )}
          <span className='badge-overlay'>
            {newItem === true ? "New" : sale === true ? "Sale" : null}
          </span>
          {isUserLoggedIn === true ? (
            isInWishList === -1 ? (
              <i
                className='fa fa-heart-o icon-btn icon-size icon-overlay'
                onClick={() => addToWishListApi(product)}
              ></i>
            ) : (
              <i
                class='fa fa-heart icon-btn icon-size filled-icon-overlay'
                onClick={() => removeFromWishListApi(_id)}
              ></i>
            )
          ) : (
            <Link to='/login'>
              <i className='fa fa-heart-o icon-btn icon-size icon-overlay'></i>
            </Link>
          )}
          {/* <i class="fa fa-heart"></i> */}
          {/* <i
            onClick={
              
                () => addToWishListApi(product)
              : (
                <Link to='/login'>
                  <i className='fa fa-heart-o icon-btn icon-size icon-overlay'></i>
                </Link>
              )
            }
            className='fa fa-heart-o icon-btn icon-size icon-overlay'
          ></i> */}
          {/* wishListHandler(product) */}
        </div>
      </div>
    </div>
  );
};
export { Card };
