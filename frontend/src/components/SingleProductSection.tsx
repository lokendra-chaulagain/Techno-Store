import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import { Rating } from "react-simple-star-rating";

export default function SingleProductSection({ products }: any) {
  const router = useRouter();
  const location = router.query.url;
  return (
    <div className="row d-flex">
      {products &&
        products.map((product: any, index: any) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2  ">
            <div className="recant_product_card  mb-4  pb-3 d-flex flex-column align-items-center justify-content-center border ">
              <Image
                className=" no_selection cp"
                src={product.image}
                objectFit="scale-down"
                alt="img"
                height={110}
                width={110}
              />

              <small className="text-muted">---------- {product.category} ----------</small>
              <p className="black_text_color black_text_color mb-0 ">{product.name.substring(0,22)}</p>

              <p className="small ">
                <span className="color_orange">NRS{product.priceNow}</span>{" "}
                <span className="text-muted">
                  <s>NRS{product.pricePrevious}</s>
                </span>
              </p>

              <Rating
                readonly
                initialValue={product.rating}
                size={16}
              />

              <div className="d-flex align-items-center text-muted gap-4">
                <div className="single_product_icon">
                  <IoIosGitCompare
                    size={20}
                    className="cp"
                  />
                </div>

                <div className="single_product_icon">
                  <AiOutlineHeart
                    size={20}
                    className="cp"
                  />
                </div>

                <div className="single_product_icon">
                  <AiOutlineShoppingCart
                    size={20}
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
