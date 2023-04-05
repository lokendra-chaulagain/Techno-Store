import Image from "next/image";
import React from "react";
import hodings from "../../data/hodings.json";

export default function ImageSection() {
  const image1 = hodings[0].image;
  const image2 = hodings[2].image;
  const image3 = hodings[2].image;
  const image4 = hodings[3].image;
  return (
    <div className="bg-custom-grey py-2 py-md-5">
      <div className="container my-3 my-md-5 ">
        <div className="row">
          <div className="col ">
            <Image
              className="cursor-pointer border"
              src={image1}
              alt="img"
              height={300}
              width={1000}
              objectFit="scale-down"
            />

            <Image
              className="cursor-pointer border"
              src={image2}
              alt="img"
              height={300}
              width={1000}
              objectFit="scale-down"
            />
          </div>
          <div className="col">
            <Image
              className="cursor-pointer border"
              src={image3}
              alt="img"
              height={300}
              width={1000}
              objectFit="scale-down"
            />

            <Image
              className="cursor-pointer border"
              src={image4}
              alt="img"
              height={300}
              width={1000}
              objectFit="scale-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
