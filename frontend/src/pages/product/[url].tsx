import Image from "next/image";
import React, { useState } from "react";
import demo2 from "../../assets/big-size.jpg";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineShoppingCart, AiOutlineGoogle, AiFillLinkedin } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductDetailSection from "../../components/ProductDetailSection";
import BestSellerCarousel from "../../components/home/BestSellerCarousel";
import CategoriesSection from "../../components/CategoriesSection";
import { IoIosGitCompare } from "react-icons/io";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import TechnicalSpecs from "../../components/TechnicalSpecs";
import ProductRating from "../../components/ProductRating";

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

  console.log(totalPrice);
  console.log(quantity);

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
  console.log(numSelected);

  return (
    <div className="px-5 ">
      <div className="row">
        <div className="col-3">
          <h5>Categories</h5>
        </div>
        <div className="col-9 d-flex">
          <div className="col-4">
            <Swiper
              // navigation={true}
              loop={true}
              className="mySwiper">
              <SwiperSlide className="d-flex align-items-center justify-content-center">
                <Image
                  className=" no_selection cp"
                  src={demo2}
                  objectFit="scale-down"
                  alt="img"
                  height={500}
                  width={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="single_product_right p-5 rounded-1">
            <h5 className="my_black">Watch 42 mm Smart Watches</h5>
            <div className="small text-muted">Smart Watches</div>
            <p className="my-2">
              Review here star <span>Add Review</span>{" "}
            </p>
            <p className="text-muted my-1">$75.00</p>
            <h4 className="color_orange ">${totalPrice}</h4>
            <p className="para_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed molestiae ab est et vitae incidunt sapiente, autem odit repellat excepturi. Quasi, fugiat.</p>

            <div className="d-flex gap-5">
              <div>
                <select
                  className="form-select rounded-0 shadow-none"
                  aria-label="Default select ">
                  <option selected>Select Color</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="quantity_calculator ">
                <AiOutlineMinus
                  onClick={handleQuantityDecrease}
                  className="cp my_black"
                  size={22}
                />
                {quantity}
                <AiOutlinePlus
                  onClick={handleQuantityIncrease}
                  className="cp my_black "
                  size={22}
                />
              </div>
            </div>

            <div className="d-flex align-items-center text-muted gap-4 mt-4">
              <button
                type="button"
                className="btn my_button fw-semibold rounded-0">
                Add To Cart{" "}
              </button>

              <IoIosGitCompare
                size={25}
                className="cp"
              />

              <AiOutlineShoppingCart
                size={25}
                className="cp"
              />
            </div>

            <div className="d-flex gap-3 mt-4">
              <h5 className="my_black">Share</h5>
              <FaWhatsapp className="footer_icon" />
              <AiOutlineGoogle className="footer_icon" />
              <AiFillLinkedin className="footer_icon" />
              <FaWhatsapp className="footer_icon" />
              <FaFacebookF className="footer_icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
        <button
          onClick={selectOneHandler}
          type="button"
          className={numSelected === 1 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Product Details
        </button>
        <button
          onClick={selectTwoHandler}
          type="button"
          className={numSelected === 2 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Technical Specs
        </button>

        <button
          onClick={selectThreeHandler}
          type="button"
          className={numSelected === 3 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Ratings
        </button>
      </div>

      {numSelected === 1 && <ProductDetailSection />}
      {numSelected === 2 && <TechnicalSpecs />}
      {numSelected === 3 && <ProductRating />}

      <BestSellerCarousel />
      <CategoriesSection />
    </div>
  );
}
