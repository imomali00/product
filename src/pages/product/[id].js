import Image from "next/image";
import React from "react";
import { ProductsService } from "../../services/product.service";

const Product = ({ product }) => {
  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col space-y-6">
      <div key={product.id} className="flex flex-col space-y-6 p-2">
        <div className="w-full h-auto relative aspect-square rounded-2xl overflow-hidden">
          <Image
            src={product.productImage.url}
            alt={product.productName}
            width={432}
            height={432}
          />
        </div>
        <div className="px-2 flex flex-col space-y-3">
          <div className="text-2xl font-semibold">{product.excerpt}</div>
          <div className="text-xl font-semibold">{product.price}</div>
        </div>
        <div className="px-2 text-medium-light">{product.description}</div>
        <button className="bg-sky-200 w-full h-14 rounded-2xl cursor-pointer">
          <div className="flex gap-2 text-xl justify-center items-center h-full">
            <p>Корзина</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Product;

export const getServerSideProps = async ({ query }) => {
  try {
    const product = await ProductsService.getOneProduct(query.id);
    return {
      props: product,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: {
        product: null,
        message: "Error fetching categories.",
      },
    };
  }
};
