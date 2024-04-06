import { products } from "../../provider/productprovider";
import { ProductCard } from "./ProductCard";

export const ProductCardList = () => {
  return (
    <div className="flex flex-row gap-4 my-6 overflow-y-scroll">
      {products.map((card, index) => (
        <ProductCard key={index + card.product_title} {...card} />
      ))}
    </div>
  );
};
