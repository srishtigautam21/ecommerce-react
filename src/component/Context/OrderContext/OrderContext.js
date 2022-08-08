import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../index";
const OrderContext = createContext({});

const OrderProvider = ({ children }) => {
  const [myOrder, setMyOrder] = useState([]);
  const { isUserLoggedIn } = useAuth();

  const getOrder = async () => {
    const encodedToken = localStorage.getItem("nurishToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const response = await axios.get("/api/user/orders", config);
      setMyOrder(response.data.orders);
    } catch (e) {
      console.log(e);
    }
  };

  const placeOrder = async (order) => {
    const encodedToken = localStorage.getItem("nurishToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const response = await axios.post(
        "/api/user/orders",
        { order: order },
        config
      );

      setMyOrder(response.data.orders);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isUserLoggedIn && getOrder();
  }, [isUserLoggedIn]);
  return (
    <OrderContext.Provider
      value={{ myOrder, setMyOrder, getOrder, placeOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};
const useOrder = () => useContext(OrderContext);
export { OrderProvider, useOrder };
