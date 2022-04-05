import { useContext, useState, createContext, useReducer } from "react";

import axios from "axios";
import {
  addToWishListToast,
  deleteFromWishListToast,
} from "../../../utility/Toastify";

const WishListContext = createContext({});

const WishListProvider = ({ children }) => {
  // const encodedToken = useAuth();
  const wishListReducer = (wishListState, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        return {
          ...wishListState,
          wishlistitem: action.payload,
        };
      case "REMOVE_FROM_WISHLIST":
        return {
          ...wishListState,
          wishlistitem: action.payload,
        };
      default:
        return wishListState;
    }
  };

  // const [wishlist, setWishList] = useState({
  //   wishlistitem: [],
  //   wishListCount: 0,
  //   heartcolor: false,
  // });
  const [wishListState, wishListDispatch] = useReducer(wishListReducer, {
    wishlistitem: [],
  });
  const wishListHandler = (item) => {
    // setWishList((prev)=>{
    //   ...prev,
    //   wishlistitem:[...prev.wishlistitem,item]
    // });
    //   setWishList((prev) => {
    //     const index = prev.wishlistitem.findIndex((i) => i._id === item._id);
    //     return index === -1 //If item is not in wishlist
    //       ? {
    //           ...prev,
    //           wishListCount: prev.wishListCount + 1,
    //           wishlistitem: [...prev.wishlistitem, item],
    //         }
    //       : {
    //           ...prev,
    //           wishListCount: prev.wishListCount - 1,
    //           wishlistitem: prev.wishlistitem.filter((i) => i._id !== item._id),
    //         }; //Will remove that item from wishlist which would already be in wishlist cart
    //   });
    // };
  };
  // const removeFromWishListHandler = (wishListCard) => {
  //   setWishList((prev) => {
  //     return {
  //       ...prev,
  //       wishListCount: prev.wishListCount - 1,
  //       wishlistitem: prev.wishlistitem.filter(
  //         (i) => i._id !== wishListCard._id
  //       ),
  //     };
  //   });
  // };
  const addToWishListApi = async (product) => {
    const encodedToken = localStorage.getItem("nurishToken");
    const config = {
      headers: {
        authorization: encodedToken,
      },
    };
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        config
      );
      console.log(response);
      wishListDispatch({
        type: "ADD_TO_WISHLIST",
        payload: response.data.wishlist,
      });
      console.log(response.data.wishlist);
      addToWishListToast("Added to WishList");
    } catch (e) {
      console.error(e);
    }
  };
  const removeFromWishListApi = async (productId) => {
    const encodedToken = localStorage.getItem("nurishToken");
    const config = {
      headers: {
        authorization: encodedToken,
      },
    };
    try {
      const response = await axios.delete(
        `/api/user/wishlist/${productId}`,
        config
      );
      console.log("remove from wishlist", response);
      wishListDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
      deleteFromWishListToast("Removed from wishList");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <WishListContext.Provider
      value={{
        wishListHandler,
        // wishlist,
        wishListState,

        // setWishList,
        addToWishListApi,
        removeFromWishListApi,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { useWishList, WishListProvider };
