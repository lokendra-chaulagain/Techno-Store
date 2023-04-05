import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import banners from "../data/banners.json";

export default function HeroCarousel() {
  return (
    <div className="bg-custom-grey">
      <div className="container-fluid">
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          {banners.map((banner: any, id: any) => (
            <SwiperSlide key={id}>
              <div className="row d-flex align-items-center py-2 py-lg-0 ">
                <div className="col-12 col-lg-6">
                  <p className="text-muted  my-0 ">{banner.category}</p>
                  <p className="color-orange h1 my-0">{banner.name} </p>
                  <p className="w-75 d-none d-xl-block text-muted">{banner.desc.substring(0, 300)}</p>
                  <p className="w-100 d-block d-xl-none text-muted ">{banner.desc.substring(0, 150)}</p>
                  <p className="h5 mt-2 color-orange">NPR {banner.priceNow}</p>
                  <p className="text-muted">
                    <s>NPR {banner.pricePrevious}</s>
                  </p>
                  <button
                    type="button"
                    className="btn bg-orange color-white fw-semibold mt-2 rounded-pill px-4 py-1">
                    Shop Now{" "}
                  </button>
                </div>

                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center mt-3 mt-lg-0">
                  <Image
                    src={banner.image}
                    objectFit="scale-down"
                    alt="img"
                    height={400}
                    width={400}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
