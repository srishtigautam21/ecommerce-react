import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginToast = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1500,
    closeOnClick: true,
  });
};

const addToWishListToast = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1500,
    closeOnClick: true,
  });
};
const deleteFromWishListToast = (text) => {
  toast.warn(text, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
  });
};
const addToCartToast = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1500,
  });
};
const deleteFromCart = (text) => {
  toast.warn(text, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
  });
};

export {
  loginToast,
  addToWishListToast,
  deleteFromWishListToast,
  addToCartToast,
  deleteFromCart,
};
