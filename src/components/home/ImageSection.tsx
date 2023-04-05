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

{
  /* <div className="col d-flex flex-column align-items-center justify-content-center">
<div className="align-self-start">
  <p className="h6 p-2 bg-success rounded-5 px-4 color-white cursor-pointer">OFFER</p>
</div>

<Image
  src={image1}
  alt="img"
  height={150}
  width={500}
  objectFit="scale-down"
/>

<p className="text-muted para_text my-0 h6 mt-2 ">Laptops</p>
<h1 className="color-orange h1 my-0">MackBook Air 2020 </h1>
<p className=" para_text text-muted">The MacBook Air 2020 is a sleek and powerful laptop with a stunning Retina display, fast performance, and long battery life. It's perfect for work, school, or everyday use.</p>

<button
  type="button"
  className="btn bg-orange color-white fw-semibold mt-4 rounded-pill px-4">
  Shop Now{" "}
</button>
</div> */
}
