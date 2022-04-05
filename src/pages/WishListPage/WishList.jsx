import "./wishList.css";
import { useWishList } from "../../component";
import { WishListCard } from "../../component";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const WishList = () => {
  useDocumentTitle("WishListPage");
  const { wishlist } = useWishList();

  return (
    <div>
      <WishListCard wishlist={wishlist} />
    </div>
  );
};

export { WishList };
