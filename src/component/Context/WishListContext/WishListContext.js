import { useContext, useState, createContext } from "react";

const WishListContext = createContext({});

const WishListProvider = ({ children }) => {
  //   const { products } = useCard();
  const [wishlist, setWishList] = useState({
    wishlistitem: [],
    wishListCount: 0,
  });
  //   const [wishListCount, setwishListCount] = useState(0);
  const wishListHandler = (item) => {
    // setwishListCount((quantity) => quantity + 1);
    setWishList((prev) => ({
      ...prev,
      wishListCount: prev.wishListCount + 1,
      wishlistitem: [...prev.wishlistitem, item],
    }));
  };
  //   console.log(wishlist.length);
  return (
    <WishListContext.Provider value={{ wishListHandler, wishlist }}>
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { useWishList, WishListProvider };
