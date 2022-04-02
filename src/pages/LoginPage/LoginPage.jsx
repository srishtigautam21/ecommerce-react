import "./loginPage.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const LoginPage = () => {
  useDocumentTitle("LoginPage");
  return (
    <div className='login-signup-page'>
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
        />
        <label htmlFor='password' className='label-font-size'>
          Password*
        </label>
        <input
          type='password'
          minLength='8'
          className='input-box'
          id='password'
        />
        <div className='forgot-psswrd'>
          <label>
            <input type='checkbox' name='checkbox' className='checkbox-size' />
            Remember Me
          </label>
          <p className='red-color forgot-psswrd-margin'>Forgot Password?</p>
        </div>
        <a href='/Pages/ProductPage/product.html'>
          <button className='button login-button'>Login</button>
        </a>
        <a
          className='signup-page-link signup-page-link-margin'
          href='/Pages/SignupPage/signup.html'
        >
          <p>
            New to nurish? <span className='color-green'>SignUp Now</span>
          </p>
        </a>
      </form>
    </div>
  );
};
export { LoginPage };
