import React from "react";
import Footer from "./Footer";
import Products from "./Products";
import SearchPanel from "./SearchPanel";

const HomePage = ({ categories }) => {
  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col space-y-6">
      <SearchPanel />
      <Products categories={categories} />
      <Footer />
    </div>
  );
};

export default HomePage;
