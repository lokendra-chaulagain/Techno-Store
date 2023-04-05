import React from "react";
import SingleProductSection from "../components/SingleProductSection";
import products from "../data/category/bestSellers.json";
import BestSellerCarousel from "../components/home/BestSellerCarousel";

export default function search() {
  return (
    <div>
      <p className="color-black py-3 fw-semibold text-center">Similar product that you searched for </p>
      <SingleProductSection products={products} />
      <BestSellerCarousel products={products} />
    </div>
  );
}
