import { useContext, useState, createContext, useReducer } from "react";

import axios from "axios";
import {
  addToWishListToast,
  deleteFromWishListToast,
} from "../../../utility/Toastify";

const WishListContext = createContext({});

const WishListProvider = ({ children }) => {
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

  const [wishListState, wishListDispatch] = useReducer(wishListReducer, {
    wishlistitem: [],
  });

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

      wishListDispatch({
        type: "ADD_TO_WISHLIST",
        payload: response.data.wishlist,
      });

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
        wishListState,
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
