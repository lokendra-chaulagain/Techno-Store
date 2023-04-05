import React from "react";
import products from "../../data/category/bestSellers.json";
import SingleProductSection from "../SingleProductSection";

export default function CategoryNavTab() {
  return (
    <div className=" mt-5">
      <hr className="my-0 mb-4 mt-2" />
      <div className="container-fluid">
        <SingleProductSection products={products} />
      </div>
    </div>
  );
}
