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
      <div class='image-wrapper'>
        <img src={HeroImage} alt='home-page-photo' class='large-img' />
      </div>
      <div class='overlay-text ecom-text-overlay'>
        <h1 class='lg-header lg-header-color'>COMPLETE GOODNESS</h1>
        <div class='md-header md-font'>
          Start your journey towards healthy life with these organic foods
        </div>
      </div>
      <a href='/Pages/ProductPage/product.html'>
        <button class='button overlay-text button-overlay'>SHOP NOW</button>
      </a>
      {/* Featured category section */}
      <h1 class='featured-header'>Featured Categories</h1>
      <div class='featured-categories'>
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
    <div class='square-image parent-positioning'>
      <img
        src={props.image}
        className='featured-categories-image'
        alt='seeds-img'
      />
      <h2 className='category-positioning'>{props.text}</h2>
    </div>
  );
};
