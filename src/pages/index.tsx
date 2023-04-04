import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import CategoryNavTab from "../components/home/CategoryNavTab";
import ImageSection from "../components/home/ImageSection";
import MixedProductSection from "../components/home/MixedProductSection";
import ProductNavTab from "../components/home/ProductNavTab";
import RecentProductCarousel from "../components/home/RecentProductCarousel";
import OurServices from "../components/OurServices";
import BestSellerCarousel from "../components/home/BestSellerCarousel";
import bestSellings from "../data/category/sellings.json";

function Index() {
  return (
    <div className="">
      <HeroCarousel />
      <div className="px-2 px-sm-5">
        <ProductNavTab />{" "}
      </div>
      <ImageSection />

      <div className="">
        <BestSellerCarousel products={bestSellings} />
        <CategoryNavTab />
        <RecentProductCarousel />
        <MixedProductSection />
        <OurServices />
      </div>
    </div>
  );
}

export default Index;
