import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginToast } from "../../../utility/Toastify";

const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const authInitialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [loginUser, setLoginUser] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  });
  const [signupUser, setSignUpUser] = useState(authInitialState);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  // const { email, password } = loginUser;

  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    // console.log("login");

    try {
      const response = await axios.post("/api/auth/login", { email, password });
      // loginUser
      localStorage.setItem("nurishToken", response.data.encodedToken);
      // console.log("auth", response.data.encodedToken);
      setUserLoggedIn(true);
      // setLoginUser({ email: "", password: "" });    //Kept this for future use
      loginToast("Login Successful");
      setTimeout(() => {
        navigate("/products");
      }, 200);
    } catch (e) {
      console.error(e);
    }
  };

  const signUpHandler = async () => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      localStorage.setItem("nurishToken", response.data.encodedToken);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        setLoginUser,
        loginUser,
        isUserLoggedIn,
        signUpHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
