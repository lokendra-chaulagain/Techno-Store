import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import demo from "../assets/product1.jpg";

export default function SingleProductSection({ products }: any) {
  return (
    <div className="row d-flex">
      {products &&
        products.map((product: any, index: any) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 ">
            <div className="recant_product_card  mb-4 gap-2 pb-3 ">
              <Image
                className=" no_selection cp"
                src={demo}
                objectFit="scale-down"
                alt="img"
                height={200}
                width={200}
              />
              <small className="text-muted">---------- Laptops ----------</small>
              <p className="h6 my_black mb-0 ">Apple iPad Mini G2356</p>
              <p className="h5 ">
                <span className="color_orange">$600.00</span> <span className="text-muted">$400</span>
              </p>
              <div className="d-flex align-items-center text-muted gap-4">
                <div className="single_product_icon">
                  <IoIosGitCompare
                    size={25}
                    className="cp"
                  />
                </div>

                <div className="single_product_icon">
                  <AiOutlineHeart
                    size={25}
                    className="cp"
                  />
                </div>

                <div className="single_product_icon">
                  <AiOutlineShoppingCart
                    size={25}
                    className="cp"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
