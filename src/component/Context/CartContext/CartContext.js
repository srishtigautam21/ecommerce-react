import { useContext, createContext, useReducer, useEffect } from "react";
import { useWishList, useCard } from "../../index";
import axios from "axios";
import { addToCartToast, deleteFromCart } from "../../../utility/Toastify";

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const { setWishList, wishlist } = useWishList();
  const { products } = useCard();

  const cartReducer = (state, action) => {
    switch (action.type) {
      // case "GET_PRODUCTS":
      //   return {
      //     ...state,
      //     cartlistitem: action.payload,
      //   };
      case "ADD_TO_CART":
        // console.log("add to cart dispatch ", action.productCard);
        return {
          ...state,
          cartlistitem: action.productCard,
        };

      // };
      // const index = state.cartlistitem.findIndex(
      //   (i) => i._id === action.productCard._id
      // );
      // return index === -1
      //   ? {
      //       ...state,
      //       cartCount: state.cartCount + 1,
      //       cartlistitem: [
      //         ...state.cartlistitem,
      //         { ...action.productCard, cartqty: 1 },
      //       ],
      //     }
      //   : {
      //       ...state,
      //       cartlistitem: state.cartlistitem.map((i) =>
      //         i._id === action.productCard._id //i se pura cart list ke cards aare hai aur action.productCard
      //           ? //vo specific card jispe hum add to cart click kar re hai vo aata hai
      //             {
      //               ...i, // ...action.productCard,
      //               cartqty: i.cartqty + 1, //action.productCard.cartqty + 1
      //             }
      //           : i
      //       ),
      //     };

      case "INCREMENT":
        console.log("increment cart dispatch ", action.productCard);
        console.log({ state, action });
        return {
          ...state,
          cartlistitem: action.productCard,
        };
      // ...state,
      // cartlistitem: state.cartlistitem.map((i) =>
      //   i._id === action.productCard._id
      //     ? {
      //         ...i,
      //         cartqty: i.cartqty + 1,
      //       }
      //     : i
      // ),
      case "DECREMENT":
        return {
          ...state,
          cartlistitem: action.productCard,
        };
      // state.cartlistitem.map((i) =>
      //     i._id === action.productCard._id
      //       ? i.cartqty < 1
      //         ? { ...i, cartqty: 1 }
      //         : { ...i, cartqty: i.cartqty - 1 }
      //       : i
      //   ),
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
      // ...state,
      //   cartlistitem: state.cartlistitem.filter(
      //     (i) => i._id !== action.productCard._id
      //   ),
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
    // console.log(product);
    const config = { headers: { authorization: encodedToken } };
    try {
      // if (products.find((p) => p._id !== product._id)) {
      //   console.log("Already present");
      // } else {
      // const response=await..
      const response = await axios.post(
        "/api/user/cart",
        { product: product },
        config
      );
      // console.log(response);
      // const res = response.data.cart.find((p) => p._id === product._id);
      // console.log(res);
      dispatch({ type: "ADD_TO_CART", productCard: response.data.cart });
      addToCartToast("Added To Cart");
      // dispatch({ type: "ADD_TO_CART", productCard: response.data.cart });
    } catch (e) {
      console.error(e);
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
      console.log("delete api response", response);
      dispatch({ type: "REMOVE_FROM_CART", productCard: response.data.cart });
      deleteFromCart("Removed From Cart");
    } catch (e) {
      console.error(e);
    }
  };

  const increaseQuantity = async (productId) => {
    const encodedToken = localStorage.getItem("nurishToken");
    console.log("in incr qty", encodedToken);
    const config = {
      headers: {
        authorization: encodedToken,
      },
    };
    try {
      console.log("in try block");
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: "increment" } },
        config
      );
      // const productInCart = response.data.cart.find((p) => p._id === productId);
      console.log("Increase qty api", response);
      // console.log("item found in cart now incr qty", productInCart);
      dispatch({ type: "INCREMENT", productCard: response.data.cart });
    } catch (e) {
      console.error(e);
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
      // console.log(response);
      dispatch({ type: "DECREMENT", productCard: response.data.cart });
    } catch (e) {
      console.error(e);
    }
  };

  // const getProducts = async () => {
  //   const config = { headers: { authorization: encodedToken } };
  //   try {
  //     const { response } = await axios.get("/api/user/cart", config);
  //     dispatch({ type: "GET_PRODUCTS", payload: response.cart });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   if (encodedToken) getProducts();
  // }, []);

  console.log(state);
  console.log(state.cartlistitem);
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
