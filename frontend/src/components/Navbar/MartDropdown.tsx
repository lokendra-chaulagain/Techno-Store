import Image from "next/image";
import React from "react";
import image2 from "../../assets/image-section-2.jpg";
import image3 from "../../assets/image-section-3.jpg";
import image4 from "../../assets/image-section-4.jpg";

export default function MartDropdown() {
  return (
    <div>
      <div className="dropdown ">
        <span
          className="my_black h6 no_selection cp"
          data-bs-toggle="dropdown">
          MART^
        </span>

        <div className="dropdown-menu nav_dropdown_menu p-4  rounded-1">
          <div className="row  ">
            <div className="col-6 d-flex  justify-content-between">
              <div className="col">
                <h5>Accessories</h5>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>

                <div className="">
                  <h5>Accessories</h5>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                </div>
              </div>

              <div className="col">
                <h5>Laptop & Computer</h5>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                <p className="nav_cat_link">Lorem, ipsum dolor.</p>

                <div className="">
                  <h5>Accessories</h5>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                  <p className="nav_cat_link">Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex flex-column gap-4 justify-content-between ">
              <Image
                className=" "
                src={image2}
                objectFit="scale-down"
                alt="img"
              />

              <Image
                className=" "
                src={image2}
                objectFit="scale-down"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
