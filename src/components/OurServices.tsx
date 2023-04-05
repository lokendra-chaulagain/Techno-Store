import Image from "next/image";
import React from "react";
import car from "../assets/car.png";
import order from "../assets/order.png";
import payment from "../assets/payment.png";
import change from "../assets/return.png";

export default function OurServices() {
  return (
    <div className="row d-flex align-items-center justify-content-between my-5 py-0 py-md-5  no-selection">
      <p className="h3 color-black text-center d-block d-md-none ">Our Services</p>
      <hr className="mt-2 d-block d-md-none" />
      <div className="col-12 col-sm-6 col-xl-3 d-flex flex-column align-items-center justify-content-center">
        <Image
          className=" no-selection  services_round  p-2 "
          src={car}
          objectFit="scale-down"
          alt="img"
          height={80}
          width={80}
        />
        <p className="my-0 h5 color-black mt-2">Worldwide Shipping</p>
        <small className="text-muted">Free Shipping On Order Over $100</small>
      </div>

      <div className="col-12 col-sm-6 col-xl-3 mt-5 mt-sm-0  d-flex flex-column align-items-center justify-content-center">
        <Image
          className=" no-selection  services_round  p-2 "
          src={order}
          objectFit="scale-down"
          alt="img"
          height={80}
          width={80}
        />
        <p className="my-0 h5 color-black mt-2">Worldwide Shipping</p>
        <small className="text-muted">Free Shipping On Order Over $100</small>
      </div>

      <div className="col-12 col-sm-6 col-xl-3  mt-5 mt-xl-0 d-flex flex-column align-items-center justify-content-center">
        <Image
          className=" no-selection  services_round  p-2 "
          src={payment}
          objectFit="scale-down"
          alt="img"
          height={80}
          width={80}
        />
        <p className="my-0 h5 color-black mt-2">Worldwide Shipping</p>
        <small className="text-muted">Free Shipping On Order Over $100</small>
      </div>

      <div className="col-12 col-sm-6 col-xl-3 mt-5 mt-xl-0 d-flex flex-column align-items-center justify-content-center">
        <Image
          className=" no-selection  services_round  p-2 "
          src={change}
          objectFit="scale-down"
          alt="img"
          height={80}
          width={80}
        />
        <p className="my-0 h5 color-black">Worldwide Shipping</p>
        <small className="text-muted">Free Shipping On Order Over $100</small>
      </div>
    </div>
  );
}
