import { Pagination } from "swiper";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import demo1 from "../../assets/banner1.png";
import demo2 from "../../assets/banner-2.png";
import demo3 from "../../assets/banner-4.png";
import CategoriesSection from "../../components/CategoriesSection";
import SingleProductSection from "../../components/SingleProductSection";
import featured1 from "../../assets/cameras/5.jpg";
import featured2 from "../../assets/computers/5.jpg";
import featured3 from "../../assets/cookers/5.jpg";
import featured4 from "../../assets/drones/5.jpg";
import featured6 from "../../assets/games/5.jpg";
import featured5 from "../../assets/fans/5.jpg";
import featured9 from "../../assets/kettles/5.jpg";
import featured7 from "../../assets/hair-dryers/5.jpg";
import featured8 from "../../assets/heaters/5.jpg";
import featured12 from "../../assets/watches/5.jpg";
import featured10 from "../../assets/phone/5.jpg";
import featured11 from "../../assets/speakers/5.png";
import { useRouter } from "next/router";
import HeroCarousel from "../../components/HeroCarousel";
import phones from "../../data/category/phones.json";
import games from "../../data/category/games.json";

export default function CategoryUrl() {
  const router = useRouter();
  const location = router.query.url;
  console.log(location);
  const [products, setProducts] = useState(phones);

  // if (location === "smart-phones") {
  //   setProducts(phones);
  // } else {
  //   setProducts(phones);
  // }

  // console.log(products);

  // const products = [
  //   {
  //     id: "2",
  //     category: "Laptop",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured5,
  //   },

  //   {
  //     id: "2",
  //     category: "Ear pod",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured4,
  //   },

  //   {
  //     id: "3",
  //     category: "Headphone",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured3,
  //   },

  //   {
  //     id: "4",
  //     category: "Fridge",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured2,
  //   },

  //   {
  //     id: "5",
  //     category: "Speaker",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured1,
  //   },

  //   {
  //     id: "6",
  //     category: "Charger",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured11,
  //   },

  //   {
  //     id: "7",
  //     category: "Watch",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured10,
  //   },

  //   {
  //     id: "8",
  //     category: "Speaker",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured9,
  //   },
  //   {
  //     id: "9",
  //     category: "Phone",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured8,
  //   },

  //   {
  //     id: "10",
  //     category: "Games",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured7,
  //   },

  //   {
  //     id: "11",
  //     category: "Printer",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured6,
  //   },

  //   {
  //     id: "12",
  //     category: "Printer",
  //     name: "Lorem Ipsum is simply dummy ",
  //     priceNow: "700",
  //     pricePrevious: "900",
  //     image: featured12,
  //   },
  // ];

  return (
    <>
      <HeroCarousel />

      <div className="px-5">
        <h5 className="black_text_color h5">Category : {location}</h5>
        <hr className="my-0 mb-4" />
        <SingleProductSection products={location=="smart-phones" ? phones : games} />

        <div className="my-5">
          <CategoriesSection products={products} />
        </div>
      </div>
    </>
  );
}
