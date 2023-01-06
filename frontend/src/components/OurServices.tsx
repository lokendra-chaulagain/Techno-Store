import Image from "next/image";
import React from "react";
import car from "../assets/car.png";
import order from "../assets/order.png";
import payment from "../assets/payment.png";
import change from "../assets/return.png";

export default function OurServices() {
  return (
    <div className="d-flex align-items-center justify-content-between my-5 py-4">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Image
         className=" no_selection  services_round  p-2 "
          src={car}
          objectFit="scale-down"
          alt="img"
          height={80}
          width={80}
        />
        <h4 className="my-0 my_black mt-2">Worldwide Shipping</h4>
        <small className="text-muted">Free Shipping On Order Over $100</small>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <Image
          className=" no_selection  services_round  p-2 "
          src={order}
          objectFit="scale-down"
          alt="img"
          height={80}
          width={80}
        />
        <h4 className="my-0 my_black mt-2">Worldwide Shipping</h4>
        <small className="text-muted">Free Shipping On Order Over $100</small>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <Image
          className=" no_selection  services_round  p-2 "
          src={payment}
          objectFit="scale-down"
          alt="img"
          height={80}
          width={80}
        />
        <h4 className="my-0 my_black mt-2">Worldwide Shipping</h4>
        <small className="text-muted">Free Shipping On Order Over $100</small>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <Image
          className=" no_selection  services_round  p-2 "
          src={change}
          objectFit="scale-down"
          alt="img"
          height={80}
          width={80}
        />
        <h4 className="my-0 my_black">Worldwide Shipping</h4>
        <small className="text-muted">Free Shipping On Order Over $100</small>
      </div>
    </div>
  );
}
