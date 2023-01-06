import Image from "next/image";
import React from "react";
import image5 from "../../assets/image-section-5.jpg";
import image1 from "../../assets/image-section-1.jpg";
import image2 from "../../assets/image-section-2.jpg";
import image3 from "../../assets/image-section-3.jpg";
import image4 from "../../assets/image-section-4.jpg";

export default function ImageSection() {
  return (
    <div>
      <div className="row">
        <div className="col-9 d-flex flex-column gap-4 p-0">
          <div className="d-flex justify-content-between">
            <div className="img_section_img_div">
              <Image
                className=" "
                src={image1}
                objectFit="scale-down"
                alt="img"
                layout="fill"
              />
            </div>

            <div className="img_section_img_div">
              <Image
                className=" "
                src={image2}
                objectFit="scale-down"
                alt="img"
              />
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="img_section_img_div">
              <Image
                className=" "
                src={image3}
                objectFit="scale-down"
                alt="img"
                layout="fill"
              />
            </div>

            <div className="img_section_img_div">
              <Image
                className=" "
                src={image4}
                objectFit="scale-down"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="col-3 p-0 d-flex ">
          <div className="img_section_vertical_img_div">
            <Image
              className=""
              src={image5}
              objectFit="scale-down"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
