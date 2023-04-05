import Image from "next/image";
import React from "react";
import watch1 from "../assets/w1.jpg";
import watch2 from "../assets/w2.jpg";

export default function ProductDetailSection() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 p-0 col-lg-6">
          <h5 className="color-black">Wireless</h5>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis reiciendis officia consequuntur expedita tempore reprehenderit est quo similique magni. Autem, dicta iure sint ipsam quam iusto laborum velit aspernatur, adipisci, quas incidunt perspiciatis. Modi!</p>
        </div>
        <div className="col-12 p-0 col-lg-6">
          <Image
            className=" no-selection cursor-pointer"
            src={watch1}
            objectFit="scale-down"
            alt="img"
            height={400}
            width={400}
          />
          <h5 className="color-black mt-5">Wireless5</h5>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ullam doloremque cumque distinctio necessitatibus explicabo magni dolorum, dolore dolor maxime!</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 p-0 col-lg-6">
          <Image
            className=" no-selection cursor-pointer"
            src={watch2}
            objectFit="scale-down"
            alt="img"
            height={400}
            width={400}
          />
        </div>

        <div className="col-12 p-0 col-lg-6">
          <h5 className="color-black">Wireless</h5>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis reiciendis officia consequuntur expedita tempore reprehenderit est quo similique magni. Autem, dicta iure sint ipsam quam iusto laborum velit aspernatur, adipisci, quas incidunt perspiciatis. Modi!</p>
        </div>
      </div>
    </div>
  );
}
