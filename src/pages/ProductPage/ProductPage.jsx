import { Card, ProductsFilter, useCard } from "../../component";
import "./productPage.css";
import { useFilterHook } from "../../hooks/useFilterHook";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const ProductPage = () => {
  useDocumentTitle("ProductPage");
  const { products, filterState } = useCard();
  const pricingFilterData = useFilterHook();

  return (
    <div className='product-container '>
      <aside className='position-fixed sidebar-flex'>
        <ProductsFilter />
      </aside>
      <div className='vertical-cards'>
        {pricingFilterData.map((product) => {
          return <Card key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};
export { ProductPage };
