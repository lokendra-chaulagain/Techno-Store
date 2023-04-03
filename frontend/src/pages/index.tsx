import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import CategoryNavTab from "../components/home/CategoryNavTab";
import ImageSection from "../components/home/ImageSection";
import MixedProductSection from "../components/home/MixedProductSection";
import ProductNavTab from "../components/home/ProductNavTab";
import RecentProductCarousel from "../components/home/RecentProductCarousel";
import OurServices from "../components/OurServices";
import BestSellerCarousel from "../components/home/BestSellerCarousel";

import featured1 from "../assets/cameras/5.jpg";
import featured2 from "../assets/computers/5.jpg";
import featured3 from "../assets/cookers/5.jpg";
import featured4 from "../assets/drones/5.jpg";
import featured6 from "../assets/games/5.jpg";
import featured5 from "../assets/fans/5.jpg";
import featured9 from "../assets/kettles/5.jpg";
import featured7 from "../assets/hair-dryers/5.jpg";
import featured8 from "../assets/heaters/5.jpg";
import featured12 from "../assets/watches/5.jpg";
import featured10 from "../assets/phone/5.jpg";
import featured11 from "../assets/speakers/5.png";

function Index() {
  const products = [
    {
      id: "2",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured5,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured4,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured2,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured1,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured11,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured10,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured9,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured8,
    },

    {
      id: "10",
      category: "Games",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured7,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured6,
    },

    {
      id: "12",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured12,
    },
  ];

  return (
    <div className="">
      <HeroCarousel />
      <div className="px-2 px-sm-5">
        <ProductNavTab />{" "}
      </div>
      <ImageSection />

      <div className="">
        <BestSellerCarousel products={products} />
        <CategoryNavTab />
        <RecentProductCarousel />
        <MixedProductSection />
        <OurServices />
      </div>
    </div>
  );
}

export default Index;
