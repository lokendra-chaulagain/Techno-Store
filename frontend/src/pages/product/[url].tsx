import Image from "next/image";
import React from "react";
import demo2 from "../../assets/long.jpg";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ProductDetailSection from "../../components/ProductDetailSection";
import BestSellerCarousel from "../../components/home/BestSellerCarousel";
import CategoriesSection from "../../components/CategoriesSection";

export default function ProductUrl() {
  return (
    <div className="px-5">
      <div className="row">
        <div className="col-3">
          <h5>Categories</h5>
        </div>
        <div className="col-9 d-flex">
          <div className="col-4">
            <Swiper
              navigation={true}
              loop={true}
              modules={[Navigation]}
              className="mySwiper">
              <SwiperSlide className="d-flex align-items-center justify-content-center">
                <Image
                  className=" no_selection cp"
                  src={demo2}
                  objectFit="scale-down"
                  alt="img"
                  height={210}
                  width={100}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <h5>Warch 42 mm Smart Watches</h5>
            <div className="small text-muted">Smart Watches</div>
            <span>
              Review here star <span>Add Review</span>{" "}
            </span>
            <p className="text-muted">$75.00</p>
            <h4>$128.00</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed molestiae ab est et vitae incidunt sapiente, autem odit repellat excepturi. Quasi, fugiat.</p>

            <div className="d-flex">
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example">
                  <option selected>Select Color</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div>
                <AiOutlineMinus
                  className="cp"
                  size={22}
                />
                1
                <AiOutlinePlus
                  className="cp"
                  size={22}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDetailSection />
      <h5>Similar Products</h5>
      <hr />
      <BestSellerCarousel />

      <h5>Explore More Categories</h5>
      <hr />
      <CategoriesSection />
    </div>
  );
}
