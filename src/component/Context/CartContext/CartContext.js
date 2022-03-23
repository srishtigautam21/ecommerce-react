import { useContext, createContext, useReducer } from "react";
import { useWishList } from "../../index";

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        // const index1 = state.cartlistitem.findIndex(
        //   (i) => i._id === state.cartlistitem._id
        // );
        return {
          ...state,
          //   cartCount: state.cartCount + 1,
          productCount: state.productCount + 1,
          // totalPrice: state.totalPrice + action.payload * state.productCount,
        };
      case "DECREMENT":
        return {
          ...state,
          //   cartCount: state.cartCount - 1,
          productCount: state.productCount >= 1 ? state.productCount - 1 : null, //TODO:do not let the user go less than 1 product
          // totalPrice: state.totalPrice - action.payload * state.productCount,
        };
      case "ADD_TO_CART":
        const index = state.cartlistitem.findIndex((i) => {
          console.log(i);
          return i._id === action.productCard._id;
        });
        console.log(state.cartlistitem);
        return index === -1
          ? {
              ...state,
              cartCount: state.cartCount + 1,
              cartlistitem: [
                ...state.cartlistitem,
                { ...action.productCard, cartqty: 1 },
              ],
              // totalPrice: state.totalPrice + action.productPrice,
            }
          : {
              ...state,
              // productCount: state.productCount + 1,
              cartlistitem: state.cartlistitem.map((i) =>
                i._id === action.productCard._id
                  ? {
                      ...i, // ...action.productCard,
                      cartqty: i.cartqty + 1, //action.productCard.cartqty + 1
                    }
                  : i
              ),
              // totalPrice:
              //   state.totalPrice + action.productPrice * state.productCount,
            };
      case "MOVE_TO_CART":
        // removeFromWishListHandler(action.productCard);
        return {
          ...state,
          cartlistitem: [...state.cartlistitem, action.productCard],
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
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
