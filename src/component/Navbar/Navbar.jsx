import { CartIcon } from "../../Assets/Svg/allsvg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className='nav-component nav-padding'>
        <div className='content-header'>
          <a className='component-libraryl-link' href='#'>
            nurish
          </a>
          <img src='/Assets/logo.svg' alt='logo' />
        </div>
        <div className='search-bar'>
          <input className='input ecom-input' placeholder='Type to search' />
          <button className='search-button'>Search</button>
        </div>
        <ul className='nav-list-items-flex'>
          <li className='list-style link-alignment home-alignment'>
            <a className='link ecom-link-color' href='#'>
              Home
            </a>
          </li>
          <li className='list-style link-alignment'>
            <a
              className='link ecom-link-color'
              href='/Pages/ProductPage/product.html'
            >
              Products
            </a>
          </li>
          <NavLinkItems text='Cart' svg={<CartIcon className='nav-icons' />} />
          <NavLinkItems
            text='WishList'
            svg={<CartIcon className='nav-icons' />}
          />
          <NavLinkItems text='Login' svg={<CartIcon className='nav-icons' />} />
        </ul>
      </nav>
    </div>
  );
};
export { Navbar };

const NavLinkItems = (props) => {
  return (
    <li className='list-style icons-alignment'>
      <a className='link ecom-link-color' href='/Pages/LoginPage/login.html'>
        {props.svg}
        <p>{props.text}</p>
      </a>
    </li>
  );
};
