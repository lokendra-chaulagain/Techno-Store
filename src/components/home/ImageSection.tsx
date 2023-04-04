import Image from "next/image";
import React from "react";
import image1 from "../../assets/image-section-1.jpg";
import image2 from "../../assets/image-section-2.jpg";
import image3 from "../../assets/image-section-3.jpg";
import image4 from "../../assets/image-section-4.jpg";

export default function ImageSection() {
  return (
    <div className="bg_grey py-5">
      <div className="container my-3 my-md-5 ">
        <div className="row">
          <div className="col ">
            <Image
              className="cp border"
              src={image1}
              alt="img"
            />

            <Image
              className="cp border"
              src={image2}
              alt="img"
            />
          </div>
          <div className="col">
            <Image
              className="cp border"
              src={image3}
              alt="img"
            />

            <Image
              className="cp border"
              src={image4}
              alt="img"
            />
          </div>

          {/* <div className="col d-flex flex-column align-items-center justify-content-center">
        <div className="align-self-start">
          <p className="h6 p-2 bg-success rounded-5 px-4 color_white cp">OFFER</p>
        </div>

        <Image
          src={blue_jar}
          alt="img"
        />

        <p className="text-muted para_text my-0 h6 mt-2 ">Laptops</p>
        <h1 className="color_orange h1 my-0">MackBook Air 2020 </h1>
        <p className=" para_text text-muted">The MacBook Air 2020 is a sleek and powerful laptop with a stunning Retina display, fast performance, and long battery life. It's perfect for work, school, or everyday use.</p>

        <button
          type="button"
          className="btn bg_orange color_white fw-semibold mt-4 rounded-pill px-4">
          Shop Now{" "}
        </button>
      </div> */}
        </div>
      </div>
    </div>
  );
}
