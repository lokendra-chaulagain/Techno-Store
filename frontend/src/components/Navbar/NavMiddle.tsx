import React from "react";
import BeautyDropdown from "./BeautyDropDown";
import ElectronicDropdown from "./ElectronicDropdown";
import FashionDropdown from "./FashionDropdown";
import MartDropdown from "./MartDropdown";

export default function NavMiddle() {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div>
        <p>Logo</p>
      </div>

      <div className="d-flex align-items-center gap-5 h6">
        <p>HOME</p>
        <ElectronicDropdown />
        <MartDropdown />
        <BeautyDropdown />
        <FashionDropdown />
        <p>SHOP</p>
        <p>BLOG</p>
        <p>CONTACT</p>
      </div>

      <div className="d-flex align-items-center gap-3">
        <p className="">L</p>
        <p>L</p>
        <p>L</p>
      </div>
    </div>
  );
}
