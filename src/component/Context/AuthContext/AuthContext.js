import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginToast, errorToast } from "../../../utility/Toastify";

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
    email: "",
    password: "",
  });
  // email: "adarshbalika@gmail.com",
  // password: "adarshbalika",
  const [signupUser, setSignUpUser] = useState(authInitialState);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const loginHandler = async (e, email, password) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", { email, password });

      localStorage.setItem("nurishToken", response.data.encodedToken);
      setUserLoggedIn(true);
      loginToast("Login Successful");
      setTimeout(() => {
        navigate("/products");
      }, 200);
    } catch (e) {
      console.error(e);
      errorToast("Invalid email or password");
    }
  };

  const signUpHandler = async (
    e,
    email,
    password,
    someUserAttribute1,
    someUserAttribute2
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        someUserAttribute1,
        someUserAttribute2,
      });
      localStorage.setItem("nurishToken", response.data.encodedToken);
      console.log(response.data.encodedToken);
      console.log(response.data.user);
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
        signupUser,
        setSignUpUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
