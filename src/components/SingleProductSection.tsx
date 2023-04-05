import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import { Rating } from "react-simple-star-rating";

export default function SingleProductSection({ products }: any) {
  const router = useRouter();
  const location = router.query.url;
  console.log(location);

  return (
    <div className="row d-flex">
      {products &&
        products.map((product: any, index: any) => (
          <div
            key={index}
            className="col-6 col-md-4 col-xl-3 col-xxl-2 border d-flex align-items-center justify-content-center py-3 px-2 ">
            <div className="col d-flex flex-column align-items-center justify-content-center ">
              <Image
                className=" no-selection cursor-pointer"
                src={product.image}
                objectFit="scale-down"
                alt="img"
                height={110}
                width={110}
              />
              <p className="fz_12 text-muted">-- {product.category} --</p>
              <p className="color-black fz_13">{product.name.substring(0, 22)}</p>
              <p className="color-orange fz_12">NPR. {product.priceNow}</p>{" "}
              <Rating
                style={{ marginTop: "-20px" }}
                readonly
                initialValue={product.rating}
                size={16}
              />
              <div className="d-flex align-items-center text-muted gap-4">
                <div className="single_product_icon">
                  <IoIosGitCompare
                    size={20}
                    className="cursor-pointer"
                  />
                </div>

                <div className="single_product_icon">
                  <AiOutlineHeart
                    size={20}
                    className="cursor-pointer"
                  />
                </div>

                <div className="single_product_icon">
                  <AiOutlineShoppingCart
                    size={20}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
