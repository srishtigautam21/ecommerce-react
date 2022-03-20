import "./wishList.css";
import { useWishList } from "../../component";
import { WishListCard } from "../../component";

const WishList = () => {
  const { wishlist } = useWishList();
  return (
    <>
      <WishListCard wishlist={wishlist} />
      {/* {wishlist.wishlistitem.map((wishlist) => (
        <WishListCard wishlist={wishlist} />
      ))} */}
    </>
  );
};

export { WishList };
