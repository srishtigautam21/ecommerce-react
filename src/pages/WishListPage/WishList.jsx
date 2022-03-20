import "./wishList.css";
import { useWishList } from "../../component";
import { WishListCard } from "../../component";

const WishList = () => {
  const { wishlist } = useWishList();

  return (
    <div>
      <WishListCard wishlist={wishlist} />
    </div>
  );
};

export { WishList };
