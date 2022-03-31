import { Card, ProductsFilter, useCard } from "../../component";
import "./productPage.css";
import { useFilterHook } from "../../hooks/useFilterHook";

const ProductPage = () => {
  const { products, filterState } = useCard();
  const pricingFilterData = useFilterHook();
  console.log(filterState.updatedProductList);
  // console.log(pricingFilterData);
  // filterDispatch({ type: "abcd" });
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
