import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";
import HeroImage from "../../Assets/Images/home-page-photo.jpg";
import SeedImage from "../../Assets/Images/seeds.jpg";
import FruitImage from "../../Assets/Images/mango.jpg";
import NutsImage from "../../Assets/Images/mixed nuts.jpg";
import GrainsImage from "../../Assets/Images/quinoa.jpg";
import { useCard } from "../../component/Context/CardContext/CardContext";

const HomePage = () => {
  const { filterDispatch, initialFilterState } = useCard();
  const navigate = useNavigate();
  // const {
  //   sortByPrice,
  //   filterByCategories,
  //   filterByRatingSlider,
  //   updatedProductList,
  // } = initialFilterState;
  return (
    <div>
      {/* Main image section */}
      <div className='image-wrapper'>
        <img src={HeroImage} alt='home-page-photo' className='large-img' />
      </div>
      <div className='overlay-text ecom-text-overlay'>
        <h1 className='lg-header lg-header-color'>COMPLETE GOODNESS</h1>
        <div className='md-header md-font'>
          Start your journey towards healthy life with these organic foods
        </div>
      </div>
      <Link to='/products'>
        <button className='button overlay-text button-overlay'>SHOP NOW</button>
      </Link>
      {/* Featured category section */}
      <h1 className='featured-header'>Featured Categories</h1>
      <div className='featured-categories'>
        <div
          onClick={() => {
            navigate("/products");
            filterDispatch({
              type: "SET_CATEGORY_FROM_HOME",
              payload: "Super Seeds",
            });
          }}
          className='square-image parent-positioning'
        >
          <img
            src={SeedImage}
            className='featured-categories-image'
            alt='seeds-img'
          />
          <h2 className='category-positioning'>Dried Seeds</h2>

          {/* <FeaturedCategory text='Dried Seeds' image={SeedImage} /> Future TODOs*/}
          <div
            onClick={() => {
              navigate("/products");
              filterDispatch({
                type: "SET_CATEGORY_FROM_HOME",
                payload: "Fruits",
              });
            }}
            className='square-image parent-positioning'
          >
            <img
              src={FruitImage}
              className='featured-categories-image'
              alt='seeds-img'
            />
            <h2 className='category-positioning'>Fruits</h2>
          </div>

          <div
            onClick={() => {
              navigate("/products");
              filterDispatch({
                type: "SET_CATEGORY_FROM_HOME",
                payload: "Nutritional Nuts",
              });
            }}
            className='square-image parent-positioning'
          >
            <img
              src={NutsImage}
              className='featured-categories-image'
              alt='seeds-img'
            />
            <h2 className='category-positioning'>Nuts</h2>
          </div>

          <div
            onClick={() => {
              navigate("/products");
              filterDispatch({
                type: "SET_CATEGORY_FROM_HOME",
                payload: "Healthy grains",
              });
            }}
            className='square-image parent-positioning'
          >
            <img
              src={GrainsImage}
              className='featured-categories-image'
              alt='seeds-img'
            />
            <h2 className='category-positioning'>Grains</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export { HomePage };

// { Future TODOs
/* const FeaturedCategory = (props) => {
  return (
    <div className='square-image parent-positioning'>
      <img
        src={props.image}
        className='featured-categories-image'
        alt='seeds-img'
      />
      <h2 className='category-positioning'>{props.text}</h2>
    </div>
  );
}; */
