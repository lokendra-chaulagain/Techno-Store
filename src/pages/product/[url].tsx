import Image from "next/image";
import React, { useState } from "react";
import demo2 from "../../assets/big-size.jpg";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineShoppingCart, AiOutlineGoogle, AiFillLinkedin } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductDetailSection from "../../components/ProductDetailSection";
import BestSellerCarousel from "../../components/home/BestSellerCarousel";
import { IoIosGitCompare } from "react-icons/io";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import TechnicalSpecs from "../../components/TechnicalSpecs";
import ProductRating from "../../components/ProductRating";

import { Navigation } from "swiper";
import { Rating } from "react-simple-star-rating";
import products from "../../data/category/arrivals.json";

export default function ProductUrl() {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(128);
  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
    setTotalPrice(128 * quantity);
  };

  const handleQuantityDecrease = () => {
    setQuantity(quantity - 1);
    setTotalPrice(128 * quantity);
  };

  const [numSelected, setNumSelected] = useState(1);
  const selectOneHandler = () => {
    setNumSelected(1);
  };
  const selectTwoHandler = () => {
    setNumSelected(2);
  };
  const selectThreeHandler = () => {
    setNumSelected(3);
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-12 col-lg-6 ">
          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Navigation]}
            className="mySwiper">
            <SwiperSlide className="d-flex align-items-center justify-content-center">
              <Image
                className=" no-selection cursor-pointer"
                src={demo2}
                objectFit="scale-down"
                alt="img"
                height={400}
                width={400}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="col-12 col-lg-6 bg-custom-grey py-3 pt-md-5 rounded-1 color-black">
          <p className="color-black h5">Watch 42 mm Smart Watches</p>
          <p className="fz_12 text-muted">Smart Watches</p>
          <Rating
            style={{ marginTop: "-20px" }}
            readonly
            initialValue={4}
            size={16}
          />
          <p className=" my-1 color-orange">NPR. 75.00</p>
          <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed molestiae ab est et vitae incidunt sapiente, autem odit repellat excepturi. Quasi, fugiat.</p>

          <div className="d-flex gap-5 mt-1">
            <div>
              <select
                defaultValue={"Select"}
                className="form-select rounded-0 shadow-none"
                aria-label="Default select ">
                <option
                  value="Select"
                  selected>
                  Select Color
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="quantity_calculator ">
              <AiOutlineMinus
                onClick={handleQuantityDecrease}
                className="cursor-pointer color-black"
                size={22}
              />
              {quantity}
              <AiOutlinePlus
                onClick={handleQuantityIncrease}
                className="cursor-pointer color-black "
                size={22}
              />
            </div>
          </div>

          <div className="d-flex align-items-center text-muted gap-3 mt-4">
            <button
              type="button"
              className="btn my_button fw-semibold rounded-0">
              Add To Cart{" "}
            </button>

            <IoIosGitCompare
              size={25}
              className="cursor-pointer"
            />

            <AiOutlineShoppingCart
              size={25}
              className="cursor-pointer"
            />
          </div>

          <div className="d-flex gap-3 mt-4">
            <p className="color-black">Share</p>
            <FaWhatsapp className="footer_icon" />
            <AiOutlineGoogle className="footer_icon" />
            <AiFillLinkedin className="footer_icon" />
            <FaWhatsapp className="footer_icon" />
            <FaFacebookF className="footer_icon" />
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center mt-5  ">
        <button
          onClick={selectOneHandler}
          type="button"
          className={numSelected === 1 ? "btn outline_button_selected rounded-0 bg-orange" : "btn outline_button rounded-0"}>
          Product Details
        </button>
        <button
          onClick={selectTwoHandler}
          type="button"
          className={numSelected === 2 ? "btn outline_button_selected rounded-0 bg-orange" : "btn outline_button rounded-0"}>
          Technical Specs
        </button>

        <button
          onClick={selectThreeHandler}
          type="button"
          className={numSelected === 3 ? "btn outline_button_selected rounded-0 bg-orange" : "btn outline_button rounded-0"}>
          Ratings
        </button>
      </div>

      {numSelected === 1 && <ProductDetailSection />}
      {numSelected === 2 && <TechnicalSpecs />}
      {numSelected === 3 && <ProductRating />}

      <BestSellerCarousel products={products} />
    </div>
  );
}
