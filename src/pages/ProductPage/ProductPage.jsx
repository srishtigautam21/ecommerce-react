import { Card } from "../../component/Card/Card";
import { useCard } from "../../component/Context/CardContext/CardContext";

const ProductPage = () => {
  const { products } = useCard();
  return (
    <>
      {products.map((product) => {
        return <Card key={product._id} product={product} />;
      })}
    </>
  );
};
export { ProductPage };
