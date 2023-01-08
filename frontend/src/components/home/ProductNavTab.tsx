import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import demo from "../../assets/product1.jpg";
import { useGetCategoriesQuery } from "../../redux/api/globalApi";
import SingleProductSection from "../SingleProductSection";

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

  const products = [{ name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }];

  return (
    <div className="mt-5">
      <div className="d-flex align-items-center  ">
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

      <hr className="my-0 mb-4 mt-2" />

      <SingleProductSection products={products} />
    </div>
  );
}
