import { Card, ProductsFilter, useCard } from "../../component";
import "./productPage.css";

const ProductPage = () => {
  const { products } = useCard();
  return (
    <div className='product-container '>
      <aside className='position-fixed sidebar-flex'>
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
