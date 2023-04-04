import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

export default function ProductColumn({ products }: any) {
  return (
    <div className="col-12 col-md-6    d-flex flex-column  " >
      <h5 className="black_text_color ">{products[0].title}</h5>
      <hr className="my-0 mb-4 " />
      {products &&
        products.map((product: any, id: any) => (
          <Link
            key={id}
            href={`/product/${product.slug}`}>
            <div className="d-flex gap-4 mb-4 px-3 py-2 bg_white align-items-center justify-content-center mixed_section_product_card">
              <Image
                className=" no_selection cp"
                src={product.image}
                objectFit="scale-down"
                alt="img"
                height={130}
                width={100}
              />
              <div>
                <p className="fz_18 black_text_color my-0">{product.name}</p>

                <Rating
                  readonly
                  initialValue={4}
                  size={16}
                />

                <div className="d-flex align-items-center gap-2">
                  <p className="color_orange ">NPR{product.priceNow} </p>
                  <p className="text-muted ">
                    <s>NPR{product.pricePrevious}</s>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
