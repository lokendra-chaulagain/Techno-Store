import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import demo from "../../assets/product1.jpg";
import { useGetCategoriesQuery } from "../../redux/api/globalApi";
import SingleProductSection from "../SingleProductSection";
import laptop from "../../assets/product-small/laptop.jpg";
import earepod from "../../assets/product-small/earepod.jpg";
import headphone from "../../assets/product-small/headphone.jpg";
import fridge from "../../assets/product-small/mini-fridge.jpg";
import speaker from "../../assets/product-small/speaker.jpg";
import charger from "../../assets/product-small/charger.jpg";
import watch from "../../assets/product-small/watch.jpg";
import printer from "../../assets/product-small/printer.jpg";
import play from "../../assets/product-small/play.jpg";
import phone from "../../assets/product-small/phone.jpg";

export default function ProductNavTab() {
  const { data: categories } = useGetCategoriesQuery();
  console.log(categories);

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

  const products = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: laptop,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: earepod,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: headphone,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fridge,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: charger,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone,
    },

    {
      id: "10",
      category: "Games",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: play,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: printer,
    },
  ];
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
