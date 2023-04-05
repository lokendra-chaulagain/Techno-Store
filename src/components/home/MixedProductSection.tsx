import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ProductColumn from "../mixed-product/ProductColumn";
import banners from "../../data/category/specialOffers.json";
import bestSellers from "../../data/mix/bestSellings4.json";
import Link from "next/link";

export default function MixedProductSection() {
  return (
    <div className="bg-custom-grey mt-5 py-3 ">
      <div className="row">
        <div className="product_wrapper col-12 col-md-7 col-lg-8 col-xl-9 mb-4 mb-md-0">
          <Swiper
            pagination={true}
            loop={true}
            modules={[Pagination]}
            className="mySwiper ">
            {banners.map((product: any, id: any) => (
              <SwiperSlide
                key={id}
                className="">
                <div className="bg-white d-flex flex-column align-items-center justify-content-between py-5">
                  <p className="h5 color-black">
                    <span className="color-orange">Save NPR 3000</span> Special Offer
                  </p>

                  <Image
                    className=" no-selection cursor-pointer"
                    src={product.image}
                    objectFit="scale-down"
                    alt="img"
                    height={400}
                    width={400}
                  />

                  <div>
                    <Link href={`/product/${product.slug}`}>
                      <p className="my-0 h5 color-black product_name">{product.name}</p>
                    </Link>
                    <p className="p fw-semibold mt-2">
                      <span className="color-orange">NRP.{product.priceNow}</span>{" "}
                      <span className="text-muted">
                        <s>NRP {product.pricePrevious}</s>
                      </span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="col">
          <ProductColumn products={bestSellers} />
        </div>
      </div>
    </div>
  );
}
