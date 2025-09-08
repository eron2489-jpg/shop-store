import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: "Home",
};

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  // await delay(3000);
  const title = "Newest arrivals";
  return <ProductList data={latestProducts} title={title} limit={4} />;
};

export default Homepage;
