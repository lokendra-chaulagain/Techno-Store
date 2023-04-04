import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import CategoriesSection from "../../components/CategoriesSection";
import SingleProductSection from "../../components/SingleProductSection";
import { useRouter } from "next/router";
import HeroCarousel from "../../components/HeroCarousel";
import phones from "../../data/category/phones.json";
import games from "../../data/category/games.json";

export default function CategoryUrl() {
  const router = useRouter();
  const location = router.query.url;
  console.log(location);

  return (
    <>
      <HeroCarousel />
      <div className="px-5">
        <h5 className="black_text_color h5">Category : {location}</h5>
        <hr className="my-0 mb-4" />
        <SingleProductSection products={location == "smart-phones" ? phones : games} />

        <div className="my-5">
          <CategoriesSection products={phones} />
        </div>
      </div>
    </>
  );
}
