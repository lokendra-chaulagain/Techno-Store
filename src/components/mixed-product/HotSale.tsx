import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HotSale({ products }: any) {
  return (
    <div className="d-block d-xl-none col-12 col-md-6 col-xl-3   d-flex flex-column ">
      <h5 className="color-black ">{products[0].title}</h5>
      <hr className="my-0 mb-4 " />
      {products &&
        products.map((product: any, id: any) => (
          <Link
            key={id}
            href={`/product/${product.slug}`}>
            <div className="d-flex gap-4 mb-4 px-3 py-2 align-items-center justify-content-center mixed_section_product_card">
              <Image
                className=" no-selection cursor-pointer"
                src={product.image}
                objectFit="scale-down"
                alt="img"
                height={130}
                width={100}
              />
              <div>
                <p className="h6 my-0">{product.name}</p>
                <small>Rating here</small>
                <div className="d-flex align-items-center gap-2">
                  <p className="color-orange h5">NPR{product.priceNow} </p>
                  <p className="text-muted h6">
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
