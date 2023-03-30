import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import demo from "../../assets/product1.jpg";
import SingleProductSection from "../SingleProductSection";

import top1 from "../../assets/product-small/laptop.jpg";
import top2 from "../../assets/product-small/earepod.jpg";
import top3 from "../../assets/product-small/headphone.jpg";
import top4 from "../../assets/product-small/mini-fridge.jpg";
import top5 from "../../assets/product-small/speaker.jpg";
import top6 from "../../assets/product-small/charger.jpg";
import top7 from "../../assets/product-small/watch.jpg";
import top8 from "../../assets/product-small/printer.jpg";
import top9 from "../../assets/product-small/play.jpg";
import top10 from "../../assets/product-small/phone.jpg";
import top11 from "../../assets/product-small/mini-fridge.jpg";
import top12 from "../../assets/product-small/headphone-1.jpg";

import arrival1 from "../../assets/cameras/9.jpg";
import arrival2 from "../../assets/computers/1.jpg";
import arrival3 from "../../assets/cookers/1.jpg";
import arrival4 from "../../assets/drones/1.png";
import arrival5 from "../../assets/fans/1.jpg";
import arrival6 from "../../assets/games/1.png";
import arrival7 from "../../assets/hair-dryers/1.jpg";
import arrival8 from "../../assets/heaters/1.jpg";
import arrival9 from "../../assets/kettles/1.jpg";
import arrival10 from "../../assets/phone/1.jpg";
import arrival11 from "../../assets/speakers/1.jpg";
import arrival12 from "../../assets/watches/1.jpg";

import featured1 from "../../assets/cameras/5.jpg";
import featured2 from "../../assets/computers/5.jpg";
import featured3 from "../../assets/cookers/5.jpg";
import featured4 from "../../assets/drones/5.jpg";
import featured6 from "../../assets/games/5.jpg";
import featured5 from "../../assets/fans/5.jpg";
import featured9 from "../../assets/kettles/5.jpg";
import featured7 from "../../assets/hair-dryers/5.jpg";
import featured8 from "../../assets/heaters/5.jpg";
import featured12 from "../../assets/watches/5.jpg";
import featured10 from "../../assets/phone/5.jpg";
import featured11 from "../../assets/speakers/5.png";

export default function ProductNavTab() {
  const newArrivals = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival9,
    },

    {
      id: "10",
      category: "Games",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival11,
    },

    {
      id: "12",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival12,
    },
  ];

  const featured = [
    {
      id: "2",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured5,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured4,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured2,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured1,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured11,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured10,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured9,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured8,
    },

    {
      id: "10",
      category: "Games",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured7,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured6,
    },

    {
      id: "12",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: featured12,
    },
  ];

  const topSelling = [
    {
      id: "2",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top5,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top4,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top2,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top1,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top11,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top10,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top9,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top8,
    },

    {
      id: "10",
      category: "Games",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top7,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top6,
    },

    {
      id: "12",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: top12,
    },
  ];

  const [products, setProducts] = useState(newArrivals);
  const [numSelected, setNumSelected] = useState(1);
  const selectOneHandler = () => {
    setNumSelected(1);
    setProducts(newArrivals);
  };
  const selectTwoHandler = () => {
    setNumSelected(2);
    setProducts(featured);
  };
  const selectThreeHandler = () => {
    setNumSelected(3);
    setProducts(topSelling);
  };

  return (
    <div className="mt-5">
      <div className="d-flex align-items-center  ">
        <button
          onClick={selectOneHandler}
          type="button"
          className={numSelected === 1 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          New Arrivals
        </button>
        <button
          onClick={selectTwoHandler}
          type="button"
          className={numSelected === 2 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Featured
        </button>

        <button
          onClick={selectThreeHandler}
          type="button"
          className={numSelected === 3 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Top Selling
        </button>
      </div>

      <hr className="my-0 mb-4 mt-2" />

      <SingleProductSection products={products} />
    </div>
  );
}
