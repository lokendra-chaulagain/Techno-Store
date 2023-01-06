import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import demo from "../../assets/product1.jpg";

export default function CategoryNavTab() {
  const products = [{ name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }];

  return (
    <div className="mt-5 ">
      <div className="radio_div d-flex">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault1">
            New Arrivals
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault2">
            Featured
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault3">
            Top Selling
          </label>
        </div>
      </div>
      <hr className="my-0 mb-4 mt-2" />
      <div className="row d-flex">
        {products &&
          products.map((product: any, index) => (
            <div
              key={index}
              className=" col-2  ">
              <div className="recant_product_card mb-4 gap-2 pb-3">
                <Image
                  className=" no_selection cp"
                  src={demo}
                  objectFit="scale-down"
                  alt="img"
                  height={200}
                  width={200}
                />
                <small className="text-muted">---------- Laptops ----------</small>
                <p className="h6 mb-0 ">Apple iPad Mini G2356</p>
                <p className="h5 ">
                  <span className="color_orange">$600.00</span> <span className="text-muted">$400</span>
                </p>
                <div className="d-flex align-items-center text-muted gap-4">
                  <IoIosGitCompare
                    size={25}
                    className="cp"
                  />
                  <AiOutlineHeart
                    size={25}
                    className="cp"
                  />
                  <AiOutlineShoppingCart
                    size={25}
                    className="cp"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
