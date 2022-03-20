import "./wishListCard.css";
import "./card.css";

const WishListCard = ({ wishlist, setWishList }) => {
  const { wishlistitem, wishListCount } = wishlist;
  const removeFromWishListHandler = (wishListCard) => {
    setWishList((prev) => {
      return {
        ...prev,
        wishListCount: prev.wishListCount - 1,
        wishlistitem: prev.wishlistitem.filter(
          (i) => i._id !== wishListCard._id
        ),
      };
    });
  };

  return (
    <div className='h-100'>
      <h1 className='cart-page-header'>My WishList</h1>
      <h2 className='cart-page-header'>
        Your Wishlist has {wishListCount} items
      </h2>
      {wishlistitem.map((item) => {
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
        } = item;
        return (
          <div className='vertical-cards'>
            <div className='wishlistCard-container'>
              <div className='card-container bottom-margin'>
                <div className='parent-positioning'>
                  <img src={image} alt={name} />
                  <div className='inside-container '>
                    <h3>{name}</h3>
                    <span className='card-content'>{categoryName}</span>
                    <p className='card-item-cost'>Rs.{price}</p>
                    {discount && (
                      <>
                        <span className='overline-text margin'>
                          Rs.{priceBeforeDiscount}
                        </span>
                        <span className='sale-perct'>{discPerc}% Off</span>
                      </>
                    )}
                    <div className='rating-xs-margin'>
                      {ratings}
                      <span className='fa fa-star checked'></span>
                      <span className='xs-margin'>|</span>5
                    </div>
                    <button className='button card-button ecom-card-button'>
                      Move to Cart
                    </button>
                    <span className='badge-overlay'>
                      {newItem ? "New" : sale ? "Sale" : null}
                    </span>
                    <i
                      onClick={() => removeFromWishListHandler(item)}
                      className='fa fa-heart-o icon-btn icon-size icon-overlay contained'
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export { WishListCard };
