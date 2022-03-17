import "./homePage.css";
import Hero from "../../Assets/Images/home-page-photo.jpg";

const HomePage = () => {
  return (
    <div>
      <div class='image-wrapper'>
        <img src={Hero} alt='home-page-photo' class='large-img' />
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
    </div>
  );
};
export { HomePage };
