import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import CategoryNavTab from "../components/home/CategoryNavTab";
import ImageSection from "../components/home/ImageSection";
import MixedProductSection from "../components/home/MixedProductSection";
import ProductNavTab from "../components/home/ProductNavTab";
import OurServices from "../components/OurServices";

export default function index() {
  return (
    <div className="">
      <HeroCarousel />
      <div className="px-2 px-sm-5">
        <ProductNavTab />
      </div>
      <ImageSection />
      <CategoryNavTab />
      <MixedProductSection />
      <OurServices />
    </div>
  );
}
