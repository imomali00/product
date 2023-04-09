import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Products = ({ categories }) => {
  const router = useRouter();
  return (
    <div className="w-full min-h-[272px] h-[272px] px-4 mt-4">
      <div className="grid grid-cols-4 gap-x-1 gap-y-4 mt-4">
        {Array.isArray(categories) &&
          categories.map((category) => (
            <div
              onClick={() => router.push(`/categories/${category.slug}`)}
              key={category.slug}
            >
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src={category.image.url}
                    width={64}
                    height={64}
                    alt="img-2"
                  />
                </div>
                <div className="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  {category.title}
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
