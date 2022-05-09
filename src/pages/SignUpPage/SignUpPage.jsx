import { Link } from "react-router-dom";
import "./signUpPage.css";
import { useAuth } from "../../component";

const SignUpPage = () => {
  const { signupUser, setSignUpUser, signUpHandler, error, setError } =
    useAuth();
  return (
    <>
      <div className='login-signup-page'>
        <form className='input-form login'>
          <h1 className='login-bottom-margin text-center'>Sign Up</h1>
          {error === "noerror" ? "" : <div className='error'>{error}</div>}
          <label htmlFor='first-name' className='label-font-size'>
            FirstName
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            className='input-box'
            id='first-name'
            value={signupUser.firstName}
            onChange={(e) => {
              setError("noerror");
              setSignUpUser((prev) => ({ ...prev, firstName: e.target.value }));
            }}
            required
          />
          <label htmlFor='last-name' className='label-font-size'>
            LastName
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            className='input-box'
            id='last-name'
            value={signupUser.lastName}
            onChange={(e) => {
              setError("noerror");
              setSignUpUser((prev) => ({ ...prev, lastName: e.target.value }));
            }}
            required
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
            onChange={(e) => {
              setError("noerror");
              setSignUpUser((prev) => ({ ...prev, email: e.target.value }));
            }}
            required
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
            value={signupUser.password}
            onChange={(e) => {
              setError("noerror");
              setSignUpUser((prev) => ({ ...prev, password: e.target.value }));
            }}
            // onFocus={() => setError("noerror")}
            required
          />

          <label>
            <input
              type='checkbox'
              name='checkbox'
              className='checkbox-size'
              defaultChecked
            />
            I accept all Terms and Condition
          </label>
          <button
            type='submit'
            className='button login-button'
            onClick={(e) => {
              e.preventDefault();
              let validRegex =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              if (
                signupUser.firstName !== "" &&
                signupUser.lastname !== "" &&
                signupUser.email !== "" &&
                signupUser.password !== ""
              ) {
                if (signupUser.password.length > 7) {
                  if (signupUser.email.match(validRegex)) {
                    signUpHandler(
                      e,
                      signupUser.email,
                      signupUser.password,
                      signupUser.firstName,
                      signupUser.lastName
                    );
                  } else {
                    setError("Email should be valid");
                  }
                } else {
                  setError("Password Should have atleast 8 characters");
                }
              } else {
                setError("Fields cannot be empty");
              }
            }}
          >
            Create New Account
          </button>
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
