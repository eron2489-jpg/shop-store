import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {limitedData.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p className="text text-red-600">No products found ! </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;

/*
    if(condition){
        return value1
    }
    else {
        return value2    
    }

    --- Ternary ---

    condition ? value1 : value2
*/
