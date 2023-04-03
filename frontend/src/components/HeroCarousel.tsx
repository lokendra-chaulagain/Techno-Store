import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import watch from "../assets/banner-3.jpg";
import kettle from "../assets/banner-2.png";
import headphone from "../assets/banner-1.png";
import phone from "../assets/banner-4.png";

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
      desc: "Experience high-quality audio and immerse yourself in your favorite music with headphones. Shop for wired or wireless options, noise-cancelling features.",
      priceNow: "6800",
      pricePrevious: "7400",
      image: headphone,
    },

    {
      id: "4",
      category: "Phones and Watches",
      name: "Apple  Iphone-6 ",
      desc: "Experience high-quality audio and immerse yourself in your favorite music with headphones. Shop for wired or wireless options, noise-cancelling features.",
      priceNow: "63000",
      pricePrevious: "67000",
      image: phone,
    },
  ];

  return (
    <div className="">
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        {products.map((product: any, id: any) => (
          <SwiperSlide key={id}>
            <div className="row d-flex align-items-center bg_grey  py-5 px-2 px-md-5">
              <div className="col-12 col-lg-6">
                <p className="text-muted para_text my-0 ">{product.category}</p>
                <h1 className="color_orange h1 my-0">{product.name} </h1>
                <p className="w-75 d-none d-xl-block para_text text-muted">{product.desc.substring(0, 300)}</p>
                <p className="w-100 d-block d-xl-none  para_text text-muted ">{product.desc.substring(0, 150)}</p>
                <p className="h2 mt-2 color_orange">NPR {product.priceNow}</p>
                <h4 className="text-muted">
                  <s>NPR {product.pricePrevious}</s>
                </h4>
                <button
                  type="button"
                  className="btn bg_orange color_white fw-semibold mt-4 rounded-pill px-4">
                  Shop Now{" "}
                </button>
              </div>

              <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center mt-3 mt-lg-0">
                <Image
                  src={product.image}
                  objectFit="scale-down"
                  alt="img"
                  width={400}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
