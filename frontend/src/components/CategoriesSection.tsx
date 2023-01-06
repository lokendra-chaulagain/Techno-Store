import Image from "next/image";
import React from "react";
import tv from "../assets/kittle.png";

export default function CategoriesSection() {
  const categories = [{ name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }];

  return (
    <div className="mt-5">
      <h5 className="my_black">Explore More Categories</h5>
      <hr />
      <div className="row">
        {categories &&
          categories.map((product: any, index) => (
            <div
              key={index}
              className="col-4 mb-4">
              <div className="d-flex p-3 align-items-center justify-content-between gap-4 category_card">
                <div>
                  <h6 className="my_black text-muted">Category Name</h6>
                  <h5 className="my_black">This is the Product Name</h5>
                  <h6 className="d-flex align-items-center color_orange gap-2">
                    Shop More <span className="fz30">→</span>{" "}
                  </h6>
                </div>

                <div>
                  <Image
                    className=" no_selection cp "
                    src={tv}
                    objectFit="scale-down"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
