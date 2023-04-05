import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

export default function ProductColumn({ products }: any) {
  return (
    <div className=" d-flex flex-column ">
      <h5 className="color-black px-2 ">{products[0].title}</h5>
      <hr className="my-0 mb-4 " />
      {products &&
        products.map((product: any, id: any) => (
          <div
            key={id}
            className="product_wrapper d-flex gap-1 mb-1  py-1 px-2  bg-white align-items-center justify-content-center ">
            <Image
              className=" no-selection "
              src={product.image}
              objectFit="scale-down"
              alt="img"
              height={130}
              width={100}
            />
            <div>
              <Link href={`/product/${product.slug}`}>
                <p className="fz_13 product_name color-black my-0">{product.name}</p>
              </Link>

              <Rating
                readonly
                initialValue={4}
                size={16}
              />

              <div className="d-flex align-items-center fz_13 gap-2">
                <p className="color-orange ">NPR. {product.priceNow} </p>
                <p className="text-muted ">
                  <s>{product.pricePrevious}</s>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
