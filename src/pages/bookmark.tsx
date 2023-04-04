import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import demo from "../assets/banner-2.png";
const products = [{ name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }];

export default function Bookmark() {
  const categories = [
    {
      name: "Smart Phones",
    },

    {
      name: "Games",
    },

    {
      name: "Computers",
    },

    {
      name: "Watches",
    },

    {
      name: "Cameras",
    },

    {
      name: "Speakers",
    },

    {
      name: "Rice Cookers",
    },

    {
      name: "Heaters",
    },

    {
      name: "Fans",
    },

    {
      name: "Electric Kettles",
    },

    {
      name: "Hair Dryers",
    },

    {
      name: "Drones",
    },

    {
      name: "Accessories",
    },
  ];

  const removesSuccess = () => toast(" ✅ Delete Success");
  const addedCartSuccess = () => toast(" ✅ Added To Cart");
  const somethingWentWrong = () => toast(" ❌ Something Went Wrong");

  const handleRemove = async () => {
    try {
      removesSuccess();
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const handleAddToCart = async () => {
    try {
      addedCartSuccess();
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <div className="container matter  d-flex align-items-center my-5 ">
      <div className="row d-flex  justify-content-center ">
        <div className="col-12 col-md-3">
          <h4 className="text-center py-2 bg_dark color_white ">Categories</h4>
          <hr className="my-0 mb-4 mt-2" />
          <div className="cat_bar ">
            {categories &&
              categories.map((category: any, index: any) => (
                <h6
                  key={index}
                  className="py-2 favourite_cat">
                  {category.name}
                </h6>
              ))}
          </div>
        </div>

        <div className=" col">
          <div className="row ">
            <h4 className="black_text_color py-2">Your Bookmarked Products (4)</h4>
            {products &&
              products.map((product: any, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6">
                  <div className="  d-flex gap-4 mb-4 p-0 align-items-center  py-2 card_product_card">
                    <Image
                      className=" no_selection cp"
                      src={demo}
                      objectFit="scale-down"
                      alt="img"
                      height={60}
                      width={60}
                    />
                    <div className="d-flex flex-column gap-1 ">
                      <small className="text-muted "> Category Name</small>
                      <p className=" black_text_color mb-0 ">Apple iPad Mini G2356</p>

                      <p className=" ">
                        <span className="color_orange">$600.00</span> <span className="text-muted">$400</span>
                      </p>
                      <div className="d-flex align-items-center text-muted gap-4 mt-2">
                        <div className="icon_bg_div p-1 rounded-circle">
                          <MdDeleteOutline
                            onClick={handleRemove}
                            size={24}
                            className="cp"
                          />
                        </div>
                        <div className="icon_bg_div p-1 rounded-circle">
                          <AiOutlineShoppingCart
                            onClick={handleAddToCart}
                            size={23}
                            className="cp"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
