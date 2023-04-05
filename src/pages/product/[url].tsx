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
import { Navigation } from "swiper";
import { Rating } from "react-simple-star-rating";

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
      image: phone,
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

        <div className="col-12 col-lg-6 single_product_right py-3 pt-md-5 rounded-1 color-black">
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

      <BestSellerCarousel products={bestSellers} />
    </div>
  );
}
