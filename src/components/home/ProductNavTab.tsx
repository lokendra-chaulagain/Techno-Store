import React, { useState } from "react";
import SingleProductSection from "../SingleProductSection";
import newArrivals from "../../data/category/arrivals.json";
import featured from "../../data/category/features.json";
import topSelling from "../../data/category/sellings.json";

export default function ProductNavTab() {
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
