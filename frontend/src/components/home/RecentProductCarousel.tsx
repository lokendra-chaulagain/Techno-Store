import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import demo from "../../assets/product1.jpg";
import Image from "next/image";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export default function RecentProductCarousel() {
  const products = [{ name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }];

  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {products &&
          products.map((product: any, index) => (
            <SwiperSlide
              key={index}
              className="recant_product_card pb-3 ">
              <Image
                className=" no_selection cp"
                src={demo}
                objectFit="scale-down"
                alt="img"
                height={200}
                width={200}
              />
              <small className="text-muted">Laptops</small>
              <p className="mb-0">Apple iPad Mini G2356</p>
              <p className="h5 ">
                <span className="">$600.00</span> <span className="text-muted">$400</span>
              </p>
              <div className="d-flex align-items-center gap-4">
                <IoIosGitCompare
                  size={25}
                  className="cp"
                />
                <AiOutlineHeart
                  size={25}
                  className="cp"
                />
                <AiOutlineShoppingCart
                  size={25}
                  className="cp"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
