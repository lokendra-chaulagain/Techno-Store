import React from "react";
import { FaBeer } from "react-icons/fa";
import BestSellerCarousel from "../components/home/BestSellerCarousel";
import CategoryNavTab from "../components/home/CategoryNavTab";
import ImageSection from "../components/home/ImageSection";
import MixedProductSection from "../components/home/MixedProductSection";
import ProductNavTab from "../components/home/ProductNavTab";
import RecentProductCarousel from "../components/home/RecentProductCarousel";
import OurServices from "../components/OurServices";

function Index() {
  return (
    <div className="px-5">
      <ImageSection />
      <ProductNavTab/>
      <BestSellerCarousel/>
      <CategoryNavTab/>
      <RecentProductCarousel />
      <MixedProductSection/>
      <OurServices/>
    </div>
  );
}

export default Index;
