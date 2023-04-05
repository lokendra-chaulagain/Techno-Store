import Image from "next/image";
import React from "react";
import errorImg from "../assets/error.png";

export default function Error() {
  return (
    <div className="min_height_100_error_page " >
      <Image
        className=" "
        src={errorImg}
        objectFit="scale-down"
        alt="img"
      />
      <h4 className="color-dark mt-4"> Sorry but we couldn’t find the page you are looking for.</h4>
      <p className="color-dark text-muted">Please check to make sure you’ve typed the URL correctly. Maybe try a search?</p>
    </div>
  );
}


