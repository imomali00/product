import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex w-full gap-2 h-auto">
        <Link
          href="/cart"
          className="bg-gray-200 w-[50%] h-14 rounded-2xl cursor-pointer"
        >
          <div className="flex gap-2 text-xl justify-center items-center h-full">
            <FaShoppingCart />
            <p>Корзина</p>
          </div>
        </Link>
        <a className="bg-gray-200 w-[50%] h-14 rounded-2xl cursor-pointer">
          <div className="flex gap-2 text-xl justify-center items-center h-full">
            <FaUser />
            <p>Профиль</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Footer;
