import "./homePage.css";
import HeroImage from "../../Assets/Images/home-page-photo.jpg";
import SeedImage from "../../Assets/Images/seeds.jpg";
import FruitImage from "../../Assets/Images/mango.jpg";
import NutsImage from "../../Assets/Images/mixed nuts.jpg";
import GrainsImage from "../../Assets/Images/quinoa.jpg";

const HomePage = () => {
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
      <a href='/Pages/ProductPage/product.html'>
        <button className='button overlay-text button-overlay'>SHOP NOW</button>
      </a>
      {/* Featured category section */}
      <h1 className='featured-header'>Featured Categories</h1>
      <div className='featured-categories'>
        <FeaturedCategory text='Dried Seeds' image={SeedImage} />

        <FeaturedCategory text='Fruits' image={FruitImage} />
        <FeaturedCategory text='Nuts' image={NutsImage} />
        <FeaturedCategory text='Grains' image={GrainsImage} />
      </div>
    </div>
  );
};
export { HomePage };

const FeaturedCategory = (props) => {
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
};
