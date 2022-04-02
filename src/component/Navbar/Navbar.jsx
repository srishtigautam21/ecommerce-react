import {
  CartIcon,
  HeartIcon,
  UserIcon,
  SearchIcon,
} from "../../Assets/Svg/allsvg";
import "./navbar.css";
import Logo from "../../Assets/Svg/logo.svg";
import { Link } from "react-router-dom";
import { useWishList, useCart } from "../index";

const Navbar = () => {
  const { wishlist } = useWishList();
  const { state } = useCart();
  const { cartlistitem } = state;

  const totalCartQuantity = cartlistitem.length;
  // console.log(totalCartQuantity);
  // cartlistitem.reduce(
  //   (acc, prod) => acc + prod.cartqty,
  //   0
  // );
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
          <input
            className='input-update ecom-input'
            placeholder='Type to search'
          />

          <button className='search-btn'>
            <SearchIcon />
          </button>
        </div>
        <ul className='nav-list-items-flex'>
          {/* <li className='list-style link-alignment home-alignment'>
            <Link className='link ecom-link-color' to='/mockman'>
              Mockman
            </Link>
          </li> */}
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
            <Link className='link ecom-link-color' to='/cart'>
              <div className='ecom-badge-wrapper'>
                <CartIcon className=' nav-icons' />
                <div className='badge icon-over-badge'>
                  {Number(totalCartQuantity)}
                </div>
              </div>
            </Link>
          </li>
          <li className='list-style icons-alignment'>
            <Link className='link ecom-link-color' to='/wishlist'>
              <div className='ecom-badge-wrapper'>
                <HeartIcon className='nav-icons' />
                <div className='badge icon-over-badge'>
                  {wishlist.wishListCount}
                </div>
              </div>
            </Link>
          </li>
          <li className='list-style icons-alignment lg-margin-top'>
            <Link className='link ecom-link-color' to='/login'>
              <UserIcon className='nav-icons' />
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
