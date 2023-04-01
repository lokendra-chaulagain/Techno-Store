import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import watch from "../assets/banner1.png";
import kettle from "../assets/banner2.png";
import headphone from "../assets/banner4.png";
import long2 from "../assets/image-section-5.jpg";

export default function HeroCarousel() {
  const products = [
    {
      id: "1",
      category: "Kitchen and Utensils",
      name: "Hamilton Electric Kettle",
      desc: "Quickly heat water for beverages or cooking with an electric kettle. Shop for capacity, material, and design online, and look for added features like automatic shut-off and temperature control.",
      priceNow: "3200",
      pricePrevious: "3750",
      image: kettle,
    },

    {
      id: "2",
      category: "Watches and Bands",
      name: "Apple Watch Series 7",
      desc: "Stay connected and track your fitness goals with a smartwatch. Shop online for features like heart rate monitoring, GPS tracking, and customizable watch faces.",
      priceNow: "8700",
      pricePrevious: "8900",
      image: watch,
    },

    {
      id: "3",
      category: "Speaker and Headphones",
      name: "Sony WF-1000XM3",
      desc: "Experience high-quality audio and immerse yourself in your favorite music with headphones. Shop for wired or wireless options, noise-cancelling features, and comfortable designs online.",
      priceNow: "6800",
      pricePrevious: "7400",
      image: headphone,
    },
  ];

  return (
    <div className="hero_carousel">
      <Swiper
        pagination={true}
        loop={true}
        modules={[Pagination]}
        className="mySwiper ">
        {products.map((product: any, id: any) => (
          <SwiperSlide
            key={id}
            className="d-flex align-items-center bg_grey p-5">
            <div>
              <p className="text-muted para_text my-0 ">{product.category}</p>
              <h1 className="color_orange hero_h1 my-0">{product.name} </h1>
              <p className="w-50 para_text text-muted">{product.desc}</p>
              <h1 className="color_orange">NPR {product.priceNow}</h1>
              <h4 className="text-muted">
                <s>NPR {product.pricePrevious}</s>
              </h4>
              <button
                type="button"
                className="btn bg_orange color_white fw-semibold mt-4 rounded-pill px-4">
                Shop Now{" "}
              </button>
            </div>
            <div>
              <Image
                className=" "
                src={product.image}
                objectFit="scale-down"
                alt="img"
                width={400}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
