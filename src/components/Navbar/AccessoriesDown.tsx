import Image from "next/image";
import React from "react";
import image1 from "../../assets/image-section-1.jpg";

export default function AccessoriesDown() {
  return (
    <div className="bg-white shadow-lg p-4">
      <div className="row  ">
        <div className="col-6 d-flex  justify-content-between">
          <div className="col">
            <h5>Smart Phones</h5>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
          </div>

          <div className="col">
            <h5>Watches</h5>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
            <p className="nav-category-link">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="col-6 d-flex flex-column gap-4 justify-content-between ">
          <Image
            className=" "
            src={image1}
            objectFit="scale-down"
            alt="img"
          />

          <Image
            className=" "
            src={image1}
            objectFit="scale-down"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
