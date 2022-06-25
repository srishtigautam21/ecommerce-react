import { createContext, useState, useContext } from "react";
import { useCart } from "../../index";

const PriceContext = createContext({});
const PriceProvider = ({ children }) => {
  const { state } = useCart();
  const { cartlistitem } = state;
  const [coupon, setCoupon] = useState("");
  const [isCorrectCoupan, setIsCorrectCoupan] = useState(false);

  const checkCoupan = (coupon) => {
    if (coupon === "nurish50") {
      setIsCorrectCoupan(true);
    } else {
      setIsCorrectCoupan(false);
    }
  };
  const initialPriceState = {
    qty: 0,
    price: 0,
    discount: 0,
  };
  const priceCard = cartlistitem.reduce(
    (acc, currCard) => ({
      ...acc,
      qty: acc.qty + currCard.qty,
      price: acc.price + currCard.price * currCard.qty,
      discount: currCard.discount
        ? acc.discount +
          (currCard.priceBeforeDiscount - currCard.price) * currCard.qty
        : 0,
    }),
    initialPriceState
  );
  const cartEmpty = (cartlistitem) => {
    cartlistitem.length = 0;
  };
  const coupanCost = Number(priceCard.price * 0.5);
  const deliveryCost = priceCard.price < 1000 ? 100 : 0;
  const priceAfterDiscount = priceCard.price + deliveryCost;
  const totalAmount = isCorrectCoupan
    ? priceCard.price - coupanCost + deliveryCost
    : priceCard.price - 0 + deliveryCost;
  return (
    <PriceContext.Provider
      value={{
        coupon,
        setCoupon,
        isCorrectCoupan,
        setIsCorrectCoupan,
        checkCoupan,
        priceCard,
        coupanCost,
        deliveryCost,
        priceAfterDiscount,
        cartEmpty,
        totalAmount,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};
const usePrice = () => useContext(PriceContext);
export { PriceProvider, usePrice };
