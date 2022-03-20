import "./wishList.css";
import { useWishList } from "../../component";
import { WishListCard } from "../../component";

const WishList = () => {
  const { wishlist, setWishList } = useWishList();

  return (
    <div>
      <WishListCard wishlist={wishlist} setWishList={setWishList} />
    </div>
  );
};

export { WishList };
