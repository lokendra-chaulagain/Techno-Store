import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ProductColumn from "../mixed-product/ProductColumn";
import HotSale from "../mixed-product/HotSale";
import banners from "../../data/category/specialOffers.json";
import bestSellers from "../../data/mix/bestSellings4.json";
import features from "../../data/mix/features4.json";
import hotSales from "../../data/mix/hotSales4.json";

export default function MixedProductSection() {
  return (
    <div className="mixed_section mt-5 p-5">
      <div className="row">
        <div className="col-12 col-md-6 ">
          <Swiper
            pagination={true}
            loop={true}
            modules={[Pagination]}
            className="mySwiper ">
            {banners.map((product: any, id: any) => (
              <SwiperSlide
                key={id}
                className="">
                <div className="offer_carousel d-flex flex-column align-items-center justify-content-between py-5">
                  <p className="h5 black_text_color">
                    <span className="color_orange">Save NPR 3000</span> Special Offer
                  </p>

                  <Image
                    className=" no_selection cp"
                    src={product.image}
                    objectFit="scale-down"
                    alt="img"
                    height={400}
                    width={400}
                  />

                  <div>
                    <p className="my-0 h5 black_text_color">Product Name</p>
                    <p className="p fw-semibold mt-2">
                      <span className="color_orange">NRP 4500</span>{" "}
                      <span className="text-muted">
                        <s>NRP 3450</s>
                      </span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ProductColumn products={bestSellers} />
        <ProductColumn products={features} />
        <HotSale products={hotSales} />
      </div>
    </div>
  );
}
