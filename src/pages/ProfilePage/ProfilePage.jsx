import "./profilePage.css";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className='profile-page'>
      <div className='price-details-container'>
        <h3>Account Details</h3>
        <div className='divider'></div>
        <Link className='link link-color' to='/profile'>
          Profile
        </Link>
        {/* <div className='divider'></div>
        <p>Address</p> */}
        <div className='divider'></div>
        <p>My Orders</p>
      </div>
      <div className=' profile-container'>
        <h4>Personal Information</h4>
        <div className='profile-card-flex'>
          <h4 className='m-sm'>First Name:</h4>
          <p className='m-sm'>adarsh</p>
        </div>
        <div className='divider'></div>
        <div className='profile-card-flex'>
          <h4 className='m-sm'>Last Name:</h4>
          <p className='m-sm'>balika</p>
        </div>
        <div className='divider'></div>
        <div className='profile-card-flex'>
          <h4 className='m-sm'>Email Id:</h4>
          <p className='m-sm'>adarshBalika@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export { ProfilePage };
