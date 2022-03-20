import "./wishListCard.css";

const WishListCard = ({ wishlist }) => {
  console.log(wishlist);
  const { wishlistitem, wishListCount } = wishlist;
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
  } = wishlistitem;
  return (
    <>
      <h1 className='cart-page-header'>My WishList</h1>
      <h2 className='cart-page-header'>
        Your Wishlist has {wishListCount} items
      </h2>
      <div className='wishlist-container'>
        <div className='vertical-cards'>
          <div className='card-container bottom-margin'>
            <div className='parent-positioning'>
              <img src={image} alt={name} />
              <div className='inside-container '>
                <h3>{name}</h3>
                <span className='card-content'>{categoryName}</span>
                <p className='card-item-cost'>Rs.{price} (750g)</p>
                <div className='rating-xs-margin'>
                  {ratings}
                  <span className='fa fa-star checked'></span>
                  <span className='xs-margin'>|</span>5
                </div>
                <button className='button card-button ecom-card-button'>
                  Move to Cart
                </button>
                <span className='badge-overlay'>New</span>
                <i className='fa fa-heart-o icon-btn icon-size icon-overlay contained'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { WishListCard };
