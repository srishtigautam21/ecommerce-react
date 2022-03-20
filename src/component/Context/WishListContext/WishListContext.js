import { useContext, useState, createContext } from "react";

const WishListContext = createContext({});

const WishListProvider = ({ children }) => {
  const [wishlist, setWishList] = useState({
    wishlistitem: [],
    wishListCount: 0,
    heartcolor: false,
  });

  const wishListHandler = (item) => {
    setWishList((prev) => {
      const index = prev.wishlistitem.findIndex((i) => i._id === item._id);
      return index === -1 //If item is not in wishlist
        ? {
            ...prev,
            wishListCount: prev.wishListCount + 1,
            wishlistitem: [...prev.wishlistitem, item],
            heartcolor: true,
          }
        : {
            ...prev,
            wishListCount: prev.wishListCount - 1,
            wishlistitem: prev.wishlistitem.filter((i) => i._id !== item._id),
            heartcolor: false,
          }; //Will remove that item from wishlist which would already be in wishlist cart
    });
  };

  return (
    <WishListContext.Provider
      value={{ wishListHandler, wishlist, setWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { useWishList, WishListProvider };
