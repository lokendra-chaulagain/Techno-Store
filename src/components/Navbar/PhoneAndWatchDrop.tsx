import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PhoneAndWatchDrop({ leftItems, rightItems, image }: any) {
  return (
    <div className="bg-white shadow-lg p-4 ">
      <div className="row">
        <div className="col-6 d-flex  justify-content-between">
          <div className="col">
            <h6>{leftItems[0].category}</h6>
            {leftItems.map((item: any, index: any) => (
              <Link
                key={index}
                href={`/product/${leftItems[0].categorySlug}`}>
                <p
                  data-bs-dismiss="offcanvas"
                  className="nav-category-link fz_12 ">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>

          <div className="col">
            <h6>{rightItems[0].category}</h6>
            {rightItems.map((item: any, index: any) => (
              <Link
                key={index}
                href={`/product/${leftItems[0].categorySlug}`}>
                <p
                  data-bs-dismiss="offcanvas"
                  className="nav-category-link fz_12 ">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="col-6 d-flex flex-wrap gap-2   ">
          <Image
            className="cursor-pointer "
            src={image}
            objectFit="scale-down"
            alt="img"
            height={200}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
}
