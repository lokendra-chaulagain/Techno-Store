import React from "react";
import BeautyDropdown from "./BeautyDropDown";
import ElectronicDropdown from "./ElectronicDropdown";
import FashionDropdown from "./FashionDropdown";
import MartDropdown from "./MartDropdown";
import logo from "../../assets/kogo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavMiddle() {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  return (
    <div className="d-flex px-5 py-3 align-items-center justify-content-between">
      <div>
        <Link href={"/"}>
          <Image
            className=" no_selection cp"
            src={logo}
            objectFit="scale-down"
            alt="img"
          />
        </Link>
      </div>

      <div className="d-flex align-items-center  gap-5 h6">
        <Link href={"/"}>
          <h6 className={path === "" ? "nav_active my-0 my_black cp no_selection" : "my-0 my_black cp no_selection"}>HOME</h6>
        </Link>

        <ElectronicDropdown />
        <MartDropdown />
        <BeautyDropdown />
        <FashionDropdown />
        <Link href={"/contact"}>
          <h6 className={path === "contact" ? "nav_active my-0 my_black cp no_selection" : "my-0 my_black cp no_selection"}>CONTACT</h6>
        </Link>
      </div>

      <div className="d-flex align-items-center gap-3"></div>
    </div>
  );
}
