import Image from "next/image";
import React from "react";
import demo from "../../assets/kittle.png";
import demo2 from "../../assets/long.jpg";
import "swiper/css";
import "swiper/css/pagination";

export default function MixedProductSection() {
  const products = [{ name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }];

  return (
    <div className="mixed_section mt-5 p-5">
      <div className="row">
        <div className="col-3 ">
          <div className="offer_carousel d-flex flex-column align-items-center p-3">
            <p className="h5 my_black">
              <span className="color_orange">Save $300</span> Special Offer
            </p>

            <Image
              className=" no_selection cp"
              src={demo2}
              objectFit="scale-down"
              alt="img"
              height={510}
              width={100}
            />

            <p className="my-0 h5 my_black">Product Name</p>
            <p className="h5 mt-2">
              <span className="color_orange">$1250.00</span> <span className="text-muted"> $2998.0</span>
            </p>
          </div>
        </div>

        <div className="col d-flex flex-column ">
          <h5 className="my_black">Best Seller</h5>
          <hr className="my-0 mb-4" />
          {products &&
            products.map((product: any, index) => (
              <div
                key={index}
                className="d-flex gap-4 mb-4 px-3 py-2 align-items-center justify-content-center mixed_section_product_card">
                <Image
                  className=" no_selection cp"
                  src={demo}
                  objectFit="scale-down"
                  alt="img"
                  height={130}
                  width={100}
                />
                <div>
                  <p className=" h6 my-0">Apple iPad Mini %2356</p>
                  <small>Rating here</small>
                  <p className="h5">
                    <span className="color_orange"> $24.00 </span> <span className="text-muted">$15.00</span>
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="col d-flex flex-column ">
          <h5 className="my_black ">Featured</h5>
          <hr className="my-0 mb-4 " />
          {products &&
            products.map((product: any, index) => (
              <div
                key={index}
                className="d-flex gap-4 mb-4 px-3 py-2 align-items-center justify-content-center mixed_section_product_card">
                <Image
                  className=" no_selection cp"
                  src={demo}
                  objectFit="scale-down"
                  alt="img"
                  height={130}
                  width={100}
                />
                <div>
                  <p className="h6 my-0">Apple iPad Mini %2356</p>
                  <small>Rating here</small>
                  <p className="h5">
                    <span className="color_orange"> $24.00</span> <span className="text-muted">$15.00</span>
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="col d-flex flex-column ">
          <h5 className=" my_black">Hot Sale</h5>
          <hr className="my-0 mb-4" />
          {products &&
            products.map((product: any, index) => (
              <div
                key={index}
                className="d-flex gap-4 mb-4 px-3 py-2 align-items-center justify-content-center mixed_section_product_card">
                <Image
                  className=" no_selection cp"
                  src={demo}
                  objectFit="scale-down"
                  alt="img"
                  height={130}
                  width={100}
                />
                <div>
                  <p className="h6 my-0">Apple iPad Mini %2356</p>
                  <small>Rating here</small>
                  <p className="h5">
                    <span className="color_orange"> $24.00 </span> <span className="text-muted">$15.00</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
