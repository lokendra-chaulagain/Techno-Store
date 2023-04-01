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

import best1 from "../../assets/cameras/9.jpg";
import best2 from "../../assets/computers/1.jpg";
import best3 from "../../assets/cookers/1.jpg";
import best4 from "../../assets/drones/1.png";

import feature1 from "../../assets/fans/4.jpg";
import feature2 from "../../assets/games/4.jpg";
import feature3 from "../../assets/hair-dryers/4.jpg";
import feature4 from "../../assets/heaters/4.jpg";

import hot1 from "../../assets/watches/4.jpg";
import hot2 from "../../assets/speakers/4.png";
import hot3 from "../../assets/phone/4.jpg";
import hot4 from "../../assets/kettles/4.jpg";
import Link from "next/link";



import phone from "../../assets/phone/1.jpg";
import game from "../../assets/games/1.png";
import computer from "../../assets/computers/1.jpg";
import watch from "../../assets/watches/1.jpg";
import camera from "../../assets/cameras/1.jpg";
import speaker from "../../assets/speakers/1.jpg";
import cooker from "../../assets/cookers/1.jpg";
import fan from "../../assets/fans/1.jpg";
import heater from "../../assets/heaters/1.jpg";
import kettle from "../../assets/kettles/1.jpg";
import dryer from "../../assets/hair-dryers/1.jpg";
import drone from "../../assets/drones/1.png";




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

  const bestSellers = [
    {
      id: "1",
      title: "Best Selling ",
      category: "Best Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "100",
      image: best1,
    },

    {
      id: "2",
      category: "Best Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: best2,
    },

    {
      id: "3",
      category: "Best Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: best3,
    },

    {
      id: "4",
      category: "Best Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: best4,
    },
  ];

  const features = [
    {
      id: "1",
      title: "Featured Products",
      category: "Best Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "100",
      image: feature1,
    },

    {
      id: "2",
      category: "Featured Products",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: feature2,
    },

    {
      id: "3",
      category: "feature Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: feature3,
    },

    {
      id: "4",
      category: "feature Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: feature4,
    },
  ];

  const hotSellers = [
    {
      id: "1",
      title: "Hot Selling Products",
      category: "Best Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "100",
      image: hot1,
    },

    {
      id: "2",
      category: "hot Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: hot2,
    },

    {
      id: "3",
      category: "hot Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: hot3,
    },

    {
      id: "4",
      category: "hot Sellers",
      name: "Lorem Ipsum is simply dummy ",
      slug: "Lorem-Ipsum-is-simply-dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: hot4,
    },
  ];



  const categories = [
    {
      name: "Smart Phones",
      image:phone,

    },

    {
      name: "Games",
      image: game,
    },

    {
      name: "Computers",
      image: computer,
    },

    {
      name: "Watches",
      image: watch,
    },

    {
      name: "Cameras",
      image: camera,
    },

    {
      name: "Speakers",
      image: speaker,
    },

    {
      name: "Rice Cookers",
      image: cooker,
    },

    {
      name: "Heaters",
      image: heater,
    },

    {
      name: "Fans",
      image: fan,
    },

    {
      name: "Electric Kettles",
      image: kettle,
    },

    {
      name: "Hair Dryers",
      image: dryer,
    },

    {
      name: "Drones",
      image: drone,
    },

    {
      name: "Accessories",
      image: hot1,
    },
  ];

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
            <h5 className="black_text_color">Watch 42 mm Smart Watches</h5>
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
                  className="cp black_text_color"
                  size={22}
                />
                {quantity}
                <AiOutlinePlus
                  onClick={handleQuantityIncrease}
                  className="cp black_text_color "
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
              <h5 className="black_text_color">Share</h5>
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

      <BestSellerCarousel products={bestSellers} />
      <BestSellerCarousel products={features} />
      <BestSellerCarousel products={hotSellers} />

      <CategoriesSection categories={categories} />
    </div>
  );
}
