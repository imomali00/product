import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import SearchPanel from "../../components/SearchPanel";
import { ProductsService } from "../../services/product.service";

const Prodyuct = ({ products }) => {
  const router = useRouter();
  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col space-y-6">
      <SearchPanel />
      <div className="w-full flex flex-col space-y-6 mb-6 items-start scroll-m-14">
        <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
          {Array.isArray(products) &&
            products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col space-y-2 items-center"
                onClick={() => router.push(`/product/${product.id}`)}
              >
                <div className=" relative w-[106px] h-[106px] x-small:w-[114px] x-small:h-[114px] rounded-2xl overflow-hidden items-center">
                  <Image
                    src={product.productImage.url}
                    width={106}
                    height={106}
                    alt={product.productName}
                  />
                </div>
                <div className="max-h-8 h-8 w-[95%] text-center text-xsmall-light break-all text-[11px] mili:text-[12px] ">
                  {product.productName}
                </div>
                <div className="flex flex-col min-h-8 h-8 items-center mt-1">
                  {product.price}
                </div>
                <div className="w-28 h-9 rounded-xl bg-gray-primary dark:bg-dark-secondary flex justify-center items-center cursor-pointer hover:bg-gray-300">
                  <span className="text-xsmall-bold bg-gray-200 px-2 py-1 rounded-lg">
                    В корзину
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Prodyuct;

export const getServerSideProps = async ({ query }) => {
  try {
    const products = await ProductsService.getProductsCategory(query.slug);
    return {
      props: products,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: null,
        message: "Error fetching categories.",
      },
    };
  }
};
