import Image from "next/image";
import React from "react";
import demo2 from "../../assets/long.jpg";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import demo1 from "../assets/banner1.png";
import demo3 from "../assets/banner4.png";
import long2 from "../assets/image-section-5.jpg";

import carousel1 from "../../assets/cameras/9.jpg";
import carousel2 from "../../assets/cameras/9.jpg";
import carousel3 from "../../assets/computers/1.jpg";
import carousel4 from "../../assets/cookers/1.jpg";
import carousel5 from "../../assets/drones/1.png";

import best1 from "../../assets/cameras/9.jpg";
import best2 from "../../assets/computers/1.jpg";
import best3 from "../../assets/cookers/1.jpg";
import best4 from "../../assets/drones/1.png";

import feature1 from "../../assets/fans/4.jpg";
import feature2 from "../../assets/games/4.jpg";
import feature3 from "../../assets/hair-dryers/4.jpg";
import feature4 from "../../assets/heaters/4.jpg";

import hot1 from "../../assets/watches/4.jpg";
import hot2 from "../../assets/speakers/4.png";
import hot3 from "../../assets/phone/4.jpg";
import hot4 from "../../assets/kettles/4.jpg";
import Link from "next/link";
import ProductColumn from "../mixed-product/ProductColumn";
import HotSale from "../mixed-product/HotSale";

export default function MixedProductSection() {
  const bestSellers = [
    {
      id: "1",
      title: "Best Sellers",
      category: "Best Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "100",
      image: best1,
    },

    {
      id: "2",
      category: "Best Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: best2,
    },

    {
      id: "3",
      category: "Best Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: best3,
    },

    {
      id: "4",
      category: "Best Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: best4,
    },
  ];

  const features = [
    {
      id: "1",
      title: "Featured",
      category: "Featured",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: feature3,
    },

    {
      id: "2",
      category: "Featured",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: feature4,
    },

    {
      id: "3",
      category: "Featured",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: feature1,
    },

    {
      id: "4",
      category: "Featured",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: feature2,
    },
  ];

  const hotSales = [
    {
      id: "1",
      title: "Hot Sales",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: hot4,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: hot3,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: hot2,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: hot1,
    },
  ];

  const products = [
    {
      id: "1",
      title: "Hot Sales",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: carousel4,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: carousel3,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: carousel2,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: carousel1,
    },
  ];

  return (
    <div className="mixed_section mt-5 p-5">
      <div className="row">
        <div className="col-12 col-md-6 ">
          <Swiper
            pagination={true}
            loop={true}
            modules={[Pagination]}
            className="mySwiper ">
            {bestSellers.map((product: any, id: any) => (
              <SwiperSlide
                key={id}
                className="">
                <div
                  className="offer_carousel d-flex flex-column align-items-center p-3"
                  style={{ height: "90vh" }}>
                  <p className="h5 black_text_color">
                    <span className="color_orange">Save $300</span> Special Offer
                  </p>

                  <Image
                    className=" no_selection cp"
                    src={product.image}
                    objectFit="scale-down"
                    alt="img"
                  />

                  <p className="my-0 h5 black_text_color">Product Name</p>
                  <p className="h5 mt-2">
                    <span className="color_orange">$1250.00</span> <span className="text-muted"> $2998.0</span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ProductColumn products={bestSellers} />
        <ProductColumn products={features} />
        <HotSale products={hotSales} />
      </div>
    </div>
  );
}
