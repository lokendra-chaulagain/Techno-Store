import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import demo1 from "../assets/banner1.png";
import demo2 from "../assets/banner2.png";
import demo3 from "../assets/banner4.png";
import long2 from "../assets/image-section-5.jpg";

export default function HeroCarousel() {
  return (
    <div className="hero_carousel">
      <Swiper
        pagination={true}
        loop={true}
        modules={[Pagination]}
        className="mySwiper ">
        <SwiperSlide className="d-flex align-items-center bg_grey p-5">
          <div>
            <p className="text-muted para_text my-0 ">Category Name here</p>
            <h1 className="color_orange hero_h1 my-0">PRODUCT NAME </h1>
            <p className="w-50 para_text text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repellendus quod laudantium ducimus necessitatibus doloribus magni aspernatur quam earum distinctio?</p>
            <h1 className="color_orange">$1.69</h1>
            <h3 className="text-muted">$1.99</h3>
            <button
              type="button"
              className="btn bg_orange color_white fw-semibold mt-4 rounded-pill px-4">
              Shop Now{" "}
            </button>
          </div>
          <div>
            <Image
              className=" "
              src={demo2}
              objectFit="scale-down"
              alt="img"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex align-items-center bg_grey p-5">
          <div>
            <p className="text-muted para_text my-0 ">Category Name here</p>
            <h1 className="color_orange hero_h1 my-0">PRODUCT NAME </h1>
            <p className="w-50 para_text text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repellendus quod laudantium ducimus necessitatibus doloribus magni aspernatur quam earum distinctio?</p>
            <h1 className="color_orange">$1.69</h1>
            <h3 className="text-muted">$1.99</h3>
            <button
              type="button"
              className="btn bg_orange color_white fw-semibold mt-4 rounded-pill px-4">
              Shop Now{" "}
            </button>
          </div>
          <div>
            <Image
              className=" "
              src={demo1}
              objectFit="scale-down"
              alt="img"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex align-items-center bg_grey p-5">
          <div>
            <p className="text-muted para_text my-0 ">Category Name here</p>
            <h1 className="color_orange hero_h1 my-0">PRODUCT NAME </h1>
            <p className="w-50 para_text text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repellendus quod laudantium ducimus necessitatibus doloribus magni aspernatur quam earum distinctio?</p>
            <h1 className="color_orange">$1.69</h1>
            <h3 className="text-muted">$1.99</h3>
            <button
              type="button"
              className="btn bg_orange color_white fw-semibold mt-4 rounded-pill px-4">
              Shop Now{" "}
            </button>
          </div>
          <div>
            <Image
              className=" "
              src={demo3}
              objectFit="scale-down"
              alt="img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
