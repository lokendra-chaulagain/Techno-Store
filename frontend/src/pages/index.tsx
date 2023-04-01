import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import BestSellerCarousel from "../components/home/BestSellerCarousel";
import CategoryNavTab from "../components/home/CategoryNavTab";
import ImageSection from "../components/home/ImageSection";
import MixedProductSection from "../components/home/MixedProductSection";
import ProductNavTab from "../components/home/ProductNavTab";
import RecentProductCarousel from "../components/home/RecentProductCarousel";
import OurServices from "../components/OurServices";

function Index() {
  return (
    <div className="">
      <HeroCarousel />
      <ImageSection />
      <div className="px-2 px-sm-5">
        <ProductNavTab />
      </div>

      <div className="">
        <BestSellerCarousel />
        <CategoryNavTab />
        <RecentProductCarousel />
        <MixedProductSection />
        <OurServices />
      </div>
    </div>
  );
}

export default Index;
