import { Link } from "react-router-dom";
import "./signUpPage.css";
import { useAuth } from "../../component";

const SignUpPage = () => {
  const { signupUser, setSignUpUser } = useAuth();
  return (
    <>
      <div className='login-signup-page'>
        <form className='input-form login'>
          <h1 className='login-bottom-margin text-center'>Sign Up</h1>
          <label htmlFor='first-name' className='label-font-size'>
            FirstName
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            className='input-box'
            id='first-name'
          />
          <label htmlFor='last-name' className='label-font-size'>
            LastName
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            className='input-box'
            id='last-name'
          />
          <label htmlFor='email-input' className='label-font-size'>
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@xyz.com'
            className='input-box'
            id='email-input'
            value={signupUser.email}
            onChange={(e) =>
              setSignUpUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <label htmlFor='password1' className='label-font-size'>
            Password
          </label>
          <input
            type='password'
            minLength='8'
            className='input-box'
            id='password1'
            placeholder='********'
          />
          {/* <label htmlFor='password2' className='label-font-size'>
            Confirm Password
          </label>
          <input
            type='password'
            minLength='8'
            className='input-box'
            id='password2'
            placeholder='********'
          /> */}
          <label>
            <input type='checkbox' name='checkbox' className='checkbox-size' />I
            accept all Terms and Condition
          </label>
          <button className='button login-button'>Create New Account</button>
          <Link
            to='/login'
            className='signup-page-link signup-page-link-sm-margin'
          >
            <p>
              Already have an account-{" "}
              <span className='color-green'>Login</span>
            </p>
          </Link>
        </form>
      </div>
    </>
  );
};
export { SignUpPage };
