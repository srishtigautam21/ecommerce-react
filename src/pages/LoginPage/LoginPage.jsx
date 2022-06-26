import "./loginPage.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useAuth } from "../../component";
import { Link } from "react-router-dom";

const LoginPage = () => {
  useDocumentTitle("LoginPage");
  const { loginHandler, setLoginUser, loginUser, error, setError } = useAuth();
  const { email, password } = loginUser;
  return (
    <div className='login-signup-page height-100'>
      <form className='input-form login'>
        <h1 className='login-bottom-margin text-center'>Login</h1>
        {error === "noerror" ? "" : <div className='error'>{error}</div>}
        <label htmlFor='email-input' className='label-font-size'>
          Email Address*
        </label>
        <input
          type='email'
          placeholder='example@xyz.com'
          className='input-box'
          id='email-input'
          value={loginUser.email}
          onChange={(e) => {
            setError("noerror");
            setLoginUser((prev) => ({ ...prev, email: e.target.value }));
          }}
          onFocus={() => setError("noerror")}
          required
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
          onChange={(e) => {
            setError("noerror");
            setLoginUser((prev) => ({ ...prev, password: e.target.value }));
          }}
          onFocus={() => setError("noerror")}
          required
        />
        <div className='forgot-psswrd'>
          <label>
            <input
              type='checkbox'
              name='checkbox'
              className='checkbox-size'
              defaultChecked
            />
            Remember Me
          </label>

          <p
            onClick={() => {
              setLoginUser((prev) => ({
                ...prev,
                email: "testuser@nurish.com",
              }));
              setLoginUser((prev) => ({ ...prev, password: "nurish12345" }));
            }}
            className='test-login forgot-psswrd-margin'
          >
            Use Test Credentials
          </p>
        </div>

        <button
          type='submit'
          className='button login-button'
          onClick={(e) => {
            e.preventDefault();

            if (email != "" || password != "") {
              loginHandler(email, password);
              setLoginUser({ email: "", password: "" });
            } else {
              setError("Fields Cannot be empty");
            }
          }}
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
