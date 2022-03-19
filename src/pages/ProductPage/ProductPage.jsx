import { Card } from "../../component/Card/Card";
import { ProductsFilter } from "../../component/ProductsFilter/ProductsFilter";
import { useCard } from "../../component/Context/CardContext/CardContext";
import "./productPage.css";

const ProductPage = () => {
  const { products } = useCard();
  return (
    <div className='product-container '>
      <aside class='position-fixed sidebar-flex'>
        <ProductsFilter />
      </aside>
      <div className='vertical-cards'>
        {products.map((product) => {
          return <Card key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};
export { ProductPage };
