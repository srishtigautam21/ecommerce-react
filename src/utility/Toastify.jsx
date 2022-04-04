import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginToast = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1000,
    closeOnClick: true,
  });
};

const wishListToast = (text) => {
  toast.default(text, {
    position: "top-right",
    autoClose: 5000,

    closeOnClick: true,
  });
};
export { loginToast, wishListToast };
