import React from "react";
import demo from "../assets/image-section-5.jpg";
import Image from "next/image";
import { AiFillFire } from "react-icons/ai";
import Link from "next/link";

export default function OfferItem() {
  return (
    <div className="bg-custom-grey py-4">
      <div className="col d-flex flex-column align-items-center justify-content-center">
        <div className="px-3 align-self-start">
          <AiFillFire
            size={24}
            className="color-orange"
          />
        </div>

        <Image
          className=""
          src={demo}
          alt="img"
          height={150}
          width={500}
          objectFit="scale-down"
        />

        <p className="text-muted color-black my-0 mt-2 ">Laptops</p>
        <p className="color-orange  h2 my-0">MackBook Air 2020 </p>
        <p className=" color-black text-muted">The MacBook Air 2020 is a sleek and powerful laptop with a stunning Retina display, fast performance, and long battery life. Its perfect for work, school, or everyday use.</p>

        <Link href={"/product/offer-laptop-mack-book-2020"}>
        <button
          type="button"
          className="btn bg-orange color-white fw-semibold mt-3 rounded-pill px-4">
          Shop Now{" "}
        </button>
        </Link>
      </div>
    </div>
  );
}
