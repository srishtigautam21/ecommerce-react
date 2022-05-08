import "./loginPage.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useAuth } from "../../component";
import { Link } from "react-router-dom";

const LoginPage = () => {
  useDocumentTitle("LoginPage");
  const { loginHandler, setLoginUser, loginUser } = useAuth();
  const { email, password } = loginUser;
  return (
    <div className='login-signup-page height-100'>
      <form className='input-form login'>
        <h1 className='login-bottom-margin text-center'>Login</h1>
        <label htmlFor='email-input' className='label-font-size'>
          Email Address*
        </label>
        <input
          type='email'
          placeholder='example@xyz.com'
          className='input-box'
          id='email-input'
          value={loginUser.email}
          onChange={(e) =>
            setLoginUser((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <label htmlFor='password' className='label-font-size'>
          Password*
        </label>
        <input
          type='password'
          minLength='8'
          className='input-box'
          id='password'
          value={loginUser.password}
          onChange={(e) =>
            setLoginUser((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <div className='forgot-psswrd'>
          <label>
            <input type='checkbox' name='checkbox' className='checkbox-size' />
            Remember Me
          </label>
          {/* <p className='red-color forgot-psswrd-margin'>Forgot Password?</p> */}
          <p
            onClick={() => {
              setLoginUser((prev) => ({
                ...prev,
                email: "adarshbalika@gmail.com",
              }));
              setLoginUser((prev) => ({ ...prev, password: "adarshbalika" }));
            }}
            className='test-login forgot-psswrd-margin'
          >
            Use Test Credentials
          </p>
        </div>

        <button
          className='button login-button'
          onClick={(e) => loginHandler(e, email, password)}
        >
          Login
        </button>

        <Link to='/signup' className='signup-page-link signup-page-link-margin'>
          <p>
            New to nurish? <span className='color-green'>SignUp Now</span>
          </p>
        </Link>
      </form>
    </div>
  );
};
export { LoginPage };
