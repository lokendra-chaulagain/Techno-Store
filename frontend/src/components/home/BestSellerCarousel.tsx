import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export default function BestSellerCarousel({ products }: any) {
  return (
    <div className="mb-5">
      {products && <h4 className="my_black">{products[0].title}</h4>}
      <hr className="my-0 mb-4" />
      <Swiper
        slidesPerView={4}
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
          products.map((product: any, id: any) => (
            <SwiperSlide
              key={id}
              className="d-flex flex-column gap-4">
              <div className="best_seller_product_card pb-3">
                <div className="d-flex align-items-center ">
                  <Image
                    className=" no_selection cp"
                    src={product.image}
                    objectFit="scale-down"
                    alt="img"
                    height={200}
                    width={200}
                  />
                  <div className="d-flex  gap-2 flex-column">
                    <small className="text-muted ">Laptops</small>
                    <p className="h6 my_black mb-0">Apple iPad Mini G2356</p>
                    <p className="h5 ">
                      <span className="color_orange">$600.00</span> <span className="text-muted">$400</span>
                    </p>
                  </div>
                </div>

                <div className="d-flex text-muted align-items-center gap-4">
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
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
