import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";

export default function SingleProductSection({ products }: any) {
  const router = useRouter();
  const location = router.query.url;
  console.log(location);

  const addToCart = () => {
    toast.success("Added To cart");
  };

  const itemBookmarked = () => {
    toast.success("Added to favourite ");
  };

  return (
    <div className="row d-flex">
      {products &&
        products.map((product: any, index: any) => (
          <div
            key={index}
            className="col-6 col-md-4 col-xl-3 col-xxl-2 border d-flex align-items-center justify-content-center py-3 px-2 ">
            <div className="product_wrapper col d-flex flex-column align-items-center justify-content-center ">
              <Image
                className=" no-selection cursor-pointer"
                src={product.image}
                objectFit="scale-down"
                alt="img"
                height={110}
                width={110}
              />
              <p className="fz_12 text-muted">-- {product.category} --</p>
              <Link href={`/product/${product.slug}`}>
                <p className="color-black fz_13 product_name">{product.name.substring(0, 22)}</p>
              </Link>
              <p className="color-orange fz_12">NPR. {product.priceNow}</p>{" "}
              <Rating
                style={{ marginTop: "-20px" }}
                readonly
                initialValue={product.rating}
                size={16}
              />
              <div className="d-flex align-items-center text-muted gap-4">
                <div className="single_product_icon">
                  <AiOutlineHeart
                    onClick={itemBookmarked}
                    size={20}
                    className="cursor-pointer"
                  />
                </div>

                <div className="single_product_icon">
                  <AiOutlineShoppingCart
                    onClick={addToCart}
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
