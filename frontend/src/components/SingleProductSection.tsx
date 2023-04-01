import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";

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
                src={product.image}
                objectFit="scale-down"
                alt="img"
                height={200}
                width={200}
              />
              <small className="text-muted">---------- {product.category} ----------</small>
              <p className="h6 black_text_color mb-0 ">{product.name}</p>
              <p className="h5 ">
                <span className="color_orange">NRS{product.priceNow}</span> <span className="text-muted">NRS{product.pricePrevious}</span>
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
