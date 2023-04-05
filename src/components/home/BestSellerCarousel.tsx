import { Navigation } from "swiper";
import Image from "next/image";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";
import "swiper/css/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function BestSellerCarousel({ products }: any) {
  return (
    <div className="my-5">
      {products && <h4 className="color-black px-2">{products[0].title}</h4>}
      <hr className="my-0 mb-4" />

      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },

          1100: {
            slidesPerView: 4,
          },

          1200: {
            slidesPerView: 5,
          },
        }}
        modules={[Navigation]}
        className="mySwiper">
        {products &&
          products.map((product: any, id: any) => (
            <SwiperSlide key={id}>
              <div className="product_wrapper d-flex flex-column gap-4 border">
                <div className=" p-3 d-flex flex-column align-items-center justify-content-center ">
                  <div className="d-flex gap-3 align-items-center ">
                    <Image
                      className=" no-selection cursor-pointer"
                      src={product.image}
                      objectFit="scale-down"
                      alt="img"
                      height={70}
                      width={70}
                    />
                    <div className="d-flex flex-column">
                      <Rating
                        readonly
                        initialValue={product.rating}
                        size={16}
                      />
                      <Link href={`/product/${product.slug}`}>
                        <p className="product_name fz_13 color-black mb-0">{product.name.substring(0, 15)}</p>
                      </Link>
                      <div className="fz_12 d-flex align-items-center gap-1 ">
                        <p className="color-orange">NPR.{product.priceNow}</p>
                        <p className="text-muted">
                          <s>{product.pricePrevious}</s>
                        </p>
                      </div>
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
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
