import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";

export default function BestSellerCarousel({ products }: any) {
  return (
    <div className="my-5 px-5">
      {products && <h4 className="color-black">{products[0].title}</h4>}
      <hr className="my-0 mb-4" />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //   1650: {
        //     slidesPerView: 4,
        //     spaceBetween: 5,
        //   },
        //   1300: {
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },
        //   700: {
        //     slidesPerView: 2,
        //     spaceBetween: 10,
        //   },
        //   500: {
        //     slidesPerView: 1,
        //   },
        // }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        {products &&
          products.map((product: any, id: any) => (
            <SwiperSlide
              key={id}
              className="d-flex flex-column gap-4 border">
              <div className=" p-3 d-flex flex-column align-items-center justify-content-center ">
                <div className="d-flex gap-3 align-items-center ">
                  <Image
                    className=" no-selection cursor-pointer"
                    src={product.image}
                    objectFit="scale-down"
                    alt="img"
                    height={150}
                    width={150}
                  />
                  <div className="d-flex flex-column">
                    <Rating
                      readonly
                      initialValue={product.rating}
                      size={16}
                    />
                    <p className="p color-black mb-0">{product.name.substring(0, 15)}</p>
                    <p className="small ">
                      <span className="color-orange">{product.priceNow}</span>{" "}
                      <span className="text-muted">
                        <s>{product.pricePrevious}</s>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="d-flex text-muted align-items-center justify-content-center gap-4 mt-3">
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
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
