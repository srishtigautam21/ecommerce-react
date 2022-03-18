import "./card.css";
import { useCard } from "../Context/CardContext/CardContext";

const Card = () => {
  const { products } = useCard();
  return (
    <>
      {products.map((item) => (
        <div ClassName='card-display'>
          <div className='card-container  bottom-margin'>
            <div className='parent-positioning'>
              <img src='../../Assets/quinoa.jpg' alt='quinoa-image'></img>
              <div className='inside-container '>
                <h3>{item.name}</h3>
                <span className='card-content'>{item.category}</span>
                <p>
                  <span className='card-item-cost margin'>Rs.{item.price}</span>
                  {item.discount && (
                    <>
                      <span className='overline-text margin'>
                        Rs.{item.discountAmount}
                      </span>
                      <span className='sale-perct'>{item.discPerc}% Off</span>
                    </>
                  )}
                </p>
                <div className='rating-xs-margin'>
                  4 <span className='fa fa-star checked'></span>
                  <span className='xs-margin'>|</span>5
                </div>
                <button className='button card-button ecom-card-button'>
                  Add to Cart
                </button>
                <span className='badge-overlay'>Sale</span>
                <i className='fa fa-heart-o icon-btn icon-size icon-overlay'></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export { Card };
