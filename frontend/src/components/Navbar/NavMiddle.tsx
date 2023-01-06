import React from "react";
import BeautyDropdown from "./BeautyDropDown";
import ElectronicDropdown from "./ElectronicDropdown";
import FashionDropdown from "./FashionDropdown";
import MartDropdown from "./MartDropdown";
import logo from "../../assets/kogo.png";
import Image from "next/image";

export default function NavMiddle() {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div>
        <Image
          className=" no_selection cp"
          src={logo}
          objectFit="scale-down"
          alt="img"
        />
      </div>

      <div className="d-flex align-items-center  gap-5 h6">
        <h6 className="my-0 my_black cp">HOME</h6>
        <ElectronicDropdown />
        <MartDropdown />
        <BeautyDropdown />
        <FashionDropdown />
        <h6 className="my-0 my_black cp">SHOh6</h6>
        <h6 className="my-0 my_black cp">BLOG</h6>
        <h6 className="my-0 my_black cp">CONTACT</h6>
      </div>

      <div className="d-flex align-items-center gap-3"></div>
    </div>
  );
}
