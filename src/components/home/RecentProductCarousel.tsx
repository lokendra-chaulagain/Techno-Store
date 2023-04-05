import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import laptop from "../../assets/product-small/laptop.jpg";
import earepod from "../../assets/product-small/earepod.jpg";
import headphone from "../../assets/product-small/headphone.jpg";
import fridge from "../../assets/product-small/mini-fridge.jpg";
import speaker from "../../assets/product-small/speaker.jpg";
import charger from "../../assets/product-small/charger.jpg";
import watch from "../../assets/product-small/watch.jpg";
import printer from "../../assets/product-small/printer.jpg";
import play from "../../assets/product-small/play.jpg";
import phone from "../../assets/product-small/phone.jpg";

export default function RecentProductCarousel() {
  const products = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: laptop,
    },

    {
      id: "1",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: earepod,
    },

    {
      id: "1",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: headphone,
    },

    {
      id: "1",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fridge,
    },

    {
      id: "1",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker,
    },

    {
      id: "1",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: charger,
    },

    {
      id: "1",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch,
    },

    {
      id: "1",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker,
    },
    {
      id: "1",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone,
    },

    {
      id: "1",
      category: "Games",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: play,
    },

    {
      id: "1",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: printer,
    },
  ];

  return (
    <div className="px-5 mt-5">
      <h5 className="color-black h5">Recent Products</h5>
      <hr className="my-0 mb-4" />
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        {products &&
          products.map((product: any, index) => (
            <SwiperSlide
              key={index}
              className="d-flex flex-column align-items-center justify-content-center gap-2 pb-3 border no-selection crusor_hand">
              <Image
                className=" "
                src={product.image}
                objectFit="scale-down"
                alt="img"
                height={200}
                width={200}
              />
              <small className="text-muted">---------- {product.category} ----------</small>
              <p className="mb-0 color-black fz_18 ">{product.name}</p>
              <p className=" ">
                <span className="color-orange">NPR{product.priceNow}</span>{" "}
                <span className="text-muted">
                  <s>NPR{product.pricePrevious}</s>
                </span>
              </p>
              <div className="d-flex align-items-center text-muted gap-4">
                <IoIosGitCompare
                  size={20}
                  className="cursor-pointer single_product_icon"
                />
                <AiOutlineHeart
                  size={20}
                  className="cursor-pointer single_product_icon"
                />
                <AiOutlineShoppingCart
                  size={20}
                  className="cursor-pointer single_product_icon"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
