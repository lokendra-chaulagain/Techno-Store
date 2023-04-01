import Image from "next/image";
import React from "react";
import image1 from "../../assets/image-section-1.jpg";
import phone1 from "../../assets/phone/1.jpg";

export default function PhoneAndWatchDrop({ leftItems, rightItems, imagesLeft, ImagesRight }: any) {
  return (
    <div className="bg_white shadow-lg p-4 ">
      <div className="row">
        <div className="col-4 d-flex  justify-content-between">
          <div className="col">
            <h5>Smart Phones</h5>
            {leftItems.map((item: any, index: any) => (
              <p
                key={index}
                className="nav_cat_link">
                {item.name}
              </p>
            ))}
          </div>

          <div className="col">
            <h5>Watches</h5>
            {rightItems.map((item: any, index: any) => (
              <p
                key={index}
                className="nav_cat_link">
                {item.name}
              </p>
            ))}
          </div>
        </div>

        <div className="col-4 d-flex flex-wrap flex-column gap-4 justify-content-between ">
          <Image
            className=" "
            src={phone1}
            objectFit="scale-down"
            height={200}
            width={500}
            alt="img"
          />

          <Image
            className=" "
            src={image1}
            objectFit="scale-down"
            alt="img"
          />
        </div>

        <div className="col-4 d-flex flex-column gap-4 justify-content-between ">
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
