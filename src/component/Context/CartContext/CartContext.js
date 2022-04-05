import { useContext, createContext, useReducer, useEffect } from "react";
import { useWishList, useCard } from "../../index";
import axios from "axios";
import {
  addToCartToast,
  deleteFromCartToast,
  errorToast,
} from "../../../utility/Toastify";

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const { setWishList, wishlist } = useWishList();
  const { products } = useCard();

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartlistitem: action.productCard,
        };

      case "INCREMENT":
        return {
          ...state,
          cartlistitem: action.productCard,
        };

      case "DECREMENT":
        return {
          ...state,
          cartlistitem: action.productCard,
        };

      case "MOVE_TO_CART":
        return {
          ...state,
          cartlistitem: [...state.cartlistitem, action.productCard],
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartlistitem: action.productCard,
        };

      default:
        return state;
    }
  };
  const cartObj = {
    cartCount: 0,
    cartlistitem: [],
    totalPrice: 0,
    productCount: 1,
  };
  const [state, dispatch] = useReducer(cartReducer, cartObj);

  const addToCart = async (product) => {
    const encodedToken = localStorage.getItem("nurishToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: product },
        config
      );
      dispatch({ type: "ADD_TO_CART", productCard: response.data.cart });
      addToCartToast("Added To Cart");
    } catch (e) {
      console.error(e);
      errorToast("Some Unwanted error occured");
    }
  };

  const deleteFromCart = async (productId) => {
    const encodedToken = localStorage.getItem("nurishToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const response = await axios.delete(
        `/api/user/cart/${productId}`,
        config
      );
      dispatch({ type: "REMOVE_FROM_CART", productCard: response.data.cart });
      deleteFromCartToast("Removed From Cart");
    } catch (e) {
      console.error(e);
      errorToast("Some Unwanted error occured");
    }
  };

  const increaseQuantity = async (productId) => {
    const encodedToken = localStorage.getItem("nurishToken");
    const config = {
      headers: {
        authorization: encodedToken,
      },
    };
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: "increment" } },
        config
      );
      dispatch({ type: "INCREMENT", productCard: response.data.cart });
    } catch (e) {
      console.error(e);
      errorToast("Some Unwanted error occured");
    }
  };

  const decreaseQuantity = async (productId) => {
    try {
      const encodedToken = localStorage.getItem("nurishToken");
      const config = { headers: { authorization: encodedToken } };
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: "decrement" } },
        config
      );
      dispatch({ type: "DECREMENT", productCard: response.data.cart });
    } catch (e) {
      console.error(e);
      errorToast("Some Unwanted error occured");
    }
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
