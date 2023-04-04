import React from "react";
import Footer from "./Footer";
import Products from "./Products";
import SearchPanel from "./SearchPanel";

const HomePage = () => {
  return (
    <>
      <div className="max-w-md mx-auto h-full min-h-screen">
        <div className="w-full flex flex-col space-y-6 min-h-screen">
          <SearchPanel />
          <Products />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
