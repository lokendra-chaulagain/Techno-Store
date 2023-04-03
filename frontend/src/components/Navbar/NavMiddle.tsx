import React, { useState } from "react";
import logo from "../../assets/kogo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PhoneAndWatchDrop from "./PhoneAndWatchDrop";
import HeaterAndFanDrop from "./HeaterAndFanDrop";
import ComputerAndLaptopDown from "./ComputerAndLaptopDown";
import AccessoriesDown from "./AccessoriesDown";
import NavMiddleOffCanvas from "./NavMiddleOffCanvas";

// import phone1 from "../../assets/phone/1.jpg";
// import watch1 from "../../assets/watches/1.jpg";

export default function NavMiddle() {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  const phones = [
    {
      name: "Smart Phones",
    },

    {
      name: "Games",
    },

    {
      name: "Computers",
    },

    {
      name: "Watches",
    },

    {
      name: "Cameras",
    },

    {
      name: "Speakers",
    },

    {
      name: "Rice Cookers",
    },

    {
      name: "Heaters",
    },
  ];

  const watches = [
    {
      name: "Smart Phones",
    },

    {
      name: "Games",
    },

    {
      name: "Computers",
    },

    {
      name: "Watches",
    },

    {
      name: "Cameras",
    },

    {
      name: "Speakers",
    },

    {
      name: "Rice Cookers",
    },

    {
      name: "Heaters",
    },
  ];

  const [open, setOpen] = useState(false);
  const [leftItems, setLeftItems] = useState(phones);
  const [rightItems, setRightItems] = useState(watches);
  const [images, setImages] = useState();

  const handleSelectNav = () => {
    setLeftItems(phones);
    setRightItems(watches);
    // setImages();
  };

  return (
    <div className="d-flex container-fluid py-3 align-items-center justify-content-between position-relative">
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

      <div className="d-none d-lg-block">
        <div className="d-flex align-items-center  gap-3 ">
          <Link href={"/"}>
            <h6 className={path === "" ? "nav_active my-0 black_text_color cp no_selection" : "my-0 black_text_color cp no_selection"}>HOME</h6>
          </Link>
          <p
            data-bs-toggle="offcanvas"
            data-bs-target="#phoneOffcanvasTop"
            aria-controls="phoneOffcanvasTop"
            className="black_text_color  no_selection cp h6">
            Phones & Watches^
          </p>
          <p
            data-bs-toggle="offcanvas"
            data-bs-target="#heaterOffcanvasTop"
            aria-controls="heaterOffcanvasTop"
            className="black_text_color  no_selection cp h6">
            Heaters & Fans^
          </p>
          <p
            data-bs-toggle="offcanvas"
            data-bs-target="#heaterOffcanvasTop"
            aria-controls="computerOffcanvasTop"
            className="black_text_color  no_selection cp h6">
            Computers & Laptops^
          </p>
          <p
            data-bs-toggle="offcanvas"
            data-bs-target="#heaterOffcanvasTop"
            aria-controls="accessoriesOffcanvasTop"
            className="black_text_color no_selection cp h6">
            Accessories^
          </p>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-top "
        id="phoneOffcanvasTop">
        <PhoneAndWatchDrop
          leftItems={leftItems}
          rightItems={rightItems}
        />
      </div>

      <div
        className="offcanvas offcanvas-top "
        id="heaterOffcanvasTop">
        <HeaterAndFanDrop />
      </div>

      <div
        className="offcanvas offcanvas-top "
        id="computerOffcanvasTop">
        <ComputerAndLaptopDown />
      </div>

      <div
        className="offcanvas offcanvas-top "
        id="accessoriesOffcanvasTop">
        <AccessoriesDown />
      </div>

      <div className="d-flex align-items-center gap-3">
        <NavMiddleOffCanvas />
      </div>
    </div>
  );
}
