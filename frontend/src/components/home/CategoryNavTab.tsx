import Image from "next/image";
import React,{useState} from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import demo from "../../assets/product1.jpg";

export default function CategoryNavTab() {
  const products = [{ name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }];
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
  console.log(numSelected)

  return (
    <div className="mt-5 ">
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
      <div className="row d-flex">
        {products &&
          products.map((product: any, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 ">
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
