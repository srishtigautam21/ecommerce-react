import { Link } from "react-router-dom";
import { useWishList, useCart, useCard, useAuth } from "../index";
import "./card.css";
import { useLocation, useNavigate } from "react-router-dom";

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
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isInCart = cartlistitem.findIndex((prod) => prod._id === product._id);
  const isInWishList = wishlistitem.findIndex(
    (prod) => prod._id === product._id
  );

  const addToCartHandler = (product) => {
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
            isOutOfStock === true ? (
              <button className='button card-button ecom-card-button disabled-btn'>
                Add To Cart
              </button>
            ) : isInCart === -1 ? (
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
            <button
              className='button card-button ecom-card-button'
              onClick={() =>
                navigate(
                  "/login",
                  { state: { from: { pathname: pathname } } },
                  { replace: true }
                )
              }
            >
              Add To Cart
            </button>
          )}

          {isOutOfStock && (
            <span className='overlay-text overlay-text-alignment'>
              Out of Stock
            </span>
          )}
          <span className='badge-overlay'>
            {newItem === true ? "New" : sale === true ? "Sale" : null}
          </span>
          {isUserLoggedIn === true ? (
            isOutOfStock === true ? (
              <i className='fa fa-heart-o icon-size icon-overlay disabled-btn'></i>
            ) : isInWishList === -1 ? (
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
        </div>
      </div>
    </div>
  );
};
export { Card };
