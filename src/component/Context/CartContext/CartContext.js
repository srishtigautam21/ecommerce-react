import { useContext, createContext, useReducer } from "react";
import { useWishList } from "../../index";

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const { setWishList, wishlist } = useWishList();
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const index = state.cartlistitem.findIndex(
          (i) =>
            // console.log(i);
            i._id === action.productCard._id
        );
        // console.log(state.cartlistitem);
        return index === -1
          ? {
              ...state,
              cartCount: state.cartCount + 1,
              cartlistitem: [
                ...state.cartlistitem,
                { ...action.productCard, cartqty: 1 },
              ],
            }
          : {
              ...state,
              cartlistitem: state.cartlistitem.map((i) =>
                i._id === action.productCard._id //i se pura cart list ke cards aare hai aur action.productCard
                  ? //vo specific card jispe hum add to cart click kar re hai vo aata hai
                    {
                      ...i, // ...action.productCard,
                      cartqty: i.cartqty + 1, //action.productCard.cartqty + 1
                    }
                  : i
              ),
            };
      case "INCREMENT":
        return {
          ...state,
          cartlistitem: state.cartlistitem.map((i) =>
            i._id === action.productCard._id
              ? {
                  ...i,
                  cartqty: i.cartqty + 1,
                }
              : i
          ),
        };
      case "DECREMENT":
        return {
          ...state,
          cartlistitem: state.cartlistitem.map((i) =>
            i._id === action.productCard._id
              ? i.cartqty < 1
                ? { ...i, cartqty: 1 }
                : { ...i, cartqty: i.cartqty - 1 }
              : i
          ),
        };
      case "MOVE_TO_CART":
        // removeFromWishListHandler(action.productCard);
        return {
          ...state,
          cartlistitem: [...state.cartlistitem, action.productCard],
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartlistitem: state.cartlistitem.filter(
            (i) => i._id !== action.productCard._id
          ),
        };
      // case "MOVE_TO_WISHLIST":
      //   return {
      //    setWishList((prev)=>{
      //      const index=prev.wishlist.findIndex((i)=)
      //    })
      //   };

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
