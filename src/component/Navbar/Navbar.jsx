import { CartIcon, HeartIcon, UserIcon } from "../../Assets/Svg/allsvg";
import "./navbar.css";
import Logo from "../../Assets/Svg/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className='nav-component nav-padding'>
        <div className='content-header'>
          <Link className='component-libraryl-link' to='/'>
            nurish
          </Link>
          <img src={Logo} alt='logo' />
        </div>
        <div className='search-bar'>
          <input className='input ecom-input' placeholder='Type to search' />
          <button className='search-button'>Search</button>
        </div>
        <ul className='nav-list-items-flex'>
          <li className='list-style link-alignment home-alignment'>
            <Link className='link ecom-link-color' to='/'>
              Home
            </Link>
          </li>
          <li className='list-style link-alignment'>
            <Link className='link ecom-link-color' to='/products'>
              Products
            </Link>
          </li>
          {/* <NavLinkItems
            text='Cart'
            svg={<CartIcon className=' nav-icons' />}
            nxtPage='/products'
          />
          <NavLinkItems
            text='WishList'
            svg={<HeartIcon className='nav-icons' nxtPage='/products' />}
          />
          <NavLinkItems
            text='Login'
            svg={<UserIcon className='nav-icons' />}
            nxtPage='/products'
          /> */}
          <li className='list-style icons-alignment'>
            <Link className='link ecom-link-color' to='/products'>
              <CartIcon className=' nav-icons' />
              <p>Cart</p>
            </Link>
          </li>
          <li className='list-style icons-alignment'>
            <Link className='link ecom-link-color' to='/wishlist'>
              <HeartIcon className='nav-icons' />
              <p>Wishlist</p>
            </Link>
          </li>
          <li className='list-style icons-alignment'>
            <Link className='link ecom-link-color' to='/products'>
              <UserIcon className='nav-icons' />
              <p>Login</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export { Navbar };

// const NavLinkItems = (props) => {
//   console.log(props.nxtPage);
//   return (
//     <li className='list-style icons-alignment'>
//       <Link className=' link ecom-link-color' to={props.nxtPage}>
//         <>
//           {props.svg}
//           <p>{props.text}</p>
//         </>
//       </Link>
//     </li>
//   );
// };
