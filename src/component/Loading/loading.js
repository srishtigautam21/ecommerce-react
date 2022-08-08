import ReactLoading from "react-loading";
import { useCart, useWishList } from "../index";
import "./loading.css";

const Loading = () => {
  const { addToCartLoading } = useCart();
  const { addToWishListApiLoading } = useWishList();
  if (!addToCartLoading && !addToWishListApiLoading) return null;
  return (
    <div className='loading-container'>
      {addToCartLoading && (
        <ReactLoading
          className='react-loading'
          type={"spin"}
          color={"#04c76f"}
        />
      )}
      {addToWishListApiLoading && (
        <ReactLoading
          className='react-loading'
          type={"spin"}
          color={"#04c76f"}
        />
      )}
    </div>
  );
};
export { Loading };
