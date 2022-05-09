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
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("noerror");

  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { email, password });

      localStorage.setItem("nurishToken", response.data.encodedToken);
      setUserData(response.data.foundUser);
      setUserLoggedIn(true);
      loginToast("Login Successful");
      setTimeout(() => {
        navigate("/products");
      }, 200);
    } catch (e) {
      setError(e.response.data.errors[0]);
      // console.error(e);
      errorToast("Invalid email or password");
    }
  };
  // someUserAttribute1,
  // someUserAttribute2
  const signUpHandler = async (e, email, password, firstName, lastName) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
        lastName,
      });
      localStorage.setItem("nurishToken", response.data.encodedToken);
      // console.log(response.data.encodedToken);
      // console.log(response.data.createdUser.email);
      const signUpData = response.data.createdUser;
      setUserData(signUpData);
      navigate("/login");
      // setUserData()
      // setProfileData({
      //   email: signUpData.email,
      //   firstName: signUpData.someUserAttribute1,
      //   lastName: signUpData.someUserAttribute2,
      //   password: signUpData.password,
      // });
    } catch (e) {
      // console.error(e);
      setError(e.response.data.errors);
    }
  };
  const logOut = () => {
    localStorage.clear();
    setUserLoggedIn(false);
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
        authInitialState,
        userData,
        error,
        setError,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
