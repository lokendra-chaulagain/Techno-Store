import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import SingleProductSection from "../../components/SingleProductSection";
import { useRouter } from "next/router";
import HeroCarousel from "../../components/HeroCarousel";
import products from "../../data/category/features.json";
import BestSellerCarousel from "../../components/home/BestSellerCarousel";
import OfferItem from "../../components/OfferItem";

export default function CategoryUrl() {
  const router = useRouter();
  const location = router.query.url;

  return (
    <>
      <HeroCarousel />
      <div className="">
        <h5 className="color-black h5 px-2 mt-3">
          Category : <span className="text-uppercase"> {location}</span>{" "}
        </h5>
        <hr className="my-0 mb-4" />
        <SingleProductSection products={products} />

        <div className="my-5">
          <OfferItem />
          <BestSellerCarousel products={products} />
        </div>
      </div>
    </>
  );
}
