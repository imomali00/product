import HomePage from "../components/HomePage";
import { ProductsService } from "../services/product.service";

export default function Home({ categories }) {
  return (
    <div className="font-sans">
      <HomePage categories={categories} />
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const categories = await ProductsService.getCategories();
    return {
      props: categories,
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      props: {
        categories: null,
        message: "Error fetching categories.",
      },
    };
  }
};
