import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            width={300}
            height={250}
            alt={`${product.slug} image`}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
      </CardContent>
      <CardFooter className="flex-between gap-4">
        <p>{product.rating} Stars</p>
        {product.stock > 0 ? (
          <ProductPrice value={Number(product.price)} />
        ) : (
          <p className="text-destructive">Out Of Stock</p>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
