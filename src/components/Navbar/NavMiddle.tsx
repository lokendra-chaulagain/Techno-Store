import React, { useState } from "react";
import logo from "../../assets/kogo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PhoneAndWatchDrop from "./PhoneAndWatchDrop";
import NavMiddleOffCanvas from "./NavMiddleOffCanvas";
import phones from "../../data/nav/phones.json";
import watches from "../../data/nav/watches.json";
import heaters from "../../data/nav/heaters.json";
import fans from "../../data/nav/fans.json";
import computers from "../../data/nav/computers.json";
import laptops from "../../data/nav/laptops.json";

export default function NavMiddle() {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  const [image, setImage] = useState("https://res.cloudinary.com/dyof6o0ul/image/upload/v1680569274/Techno-Store/Nav/watch-nav_rapfz7.jpg");

  const selectPhonesAndWatches = () => {
    setLeftItems(phones);
    setRightItems(watches);
    setImage("https://res.cloudinary.com/dyof6o0ul/image/upload/v1680569274/Techno-Store/Nav/watch-nav_rapfz7.jpg");
  };

  const selectHeatersAndFans = () => {
    setLeftItems(heaters);
    setRightItems(fans);
    setImage("https://res.cloudinary.com/dyof6o0ul/image/upload/v1680571560/Techno-Store/Nav/3_c7wul4.jpg");
  };

  const selectComputersAndLaptops = () => {
    setLeftItems(computers);
    setRightItems(laptops);
    setImage("https://res.cloudinary.com/dyof6o0ul/image/upload/v1680570077/Techno-Store/Nav/tv_s8czow.png");
  };

  const selectAccessories = () => {};

  const [leftItems, setLeftItems] = useState(phones);
  const [rightItems, setRightItems] = useState(watches);

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
            onClick={selectPhonesAndWatches}
            data-bs-toggle="offcanvas"
            data-bs-target="#phoneOffcanvasTop"
            aria-controls="phoneOffcanvasTop"
            className="black_text_color  no_selection cp h6">
            Phones & Watches^
          </p>

          <p
            onClick={selectHeatersAndFans}
            data-bs-toggle="offcanvas"
            data-bs-target="#heaterOffcanvasTop"
            aria-controls="heaterOffcanvasTop"
            className="black_text_color  no_selection cp h6">
            Heaters & Fans^
          </p>

          <p
            onClick={selectComputersAndLaptops}
            data-bs-toggle="offcanvas"
            data-bs-target="#heaterOffcanvasTop"
            aria-controls="computerOffcanvasTop"
            className="black_text_color  no_selection cp h6">
            Computers & Laptops^
          </p>

          <p
            onClick={selectAccessories}
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
          image={image}
        />
      </div>

      <div
        className="offcanvas offcanvas-top "
        id="heaterOffcanvasTop">
        <PhoneAndWatchDrop
          leftItems={leftItems}
          rightItems={rightItems}
          image={image}
        />
      </div>

      <div
        className="offcanvas offcanvas-top "
        id="computerOffcanvasTop">
        <PhoneAndWatchDrop
          leftItems={leftItems}
          rightItems={rightItems}
          image={image}
        />
      </div>

      <div
        className="offcanvas offcanvas-top "
        id="accessoriesOffcanvasTop">
        <PhoneAndWatchDrop
          leftItems={leftItems}
          rightItems={rightItems}
          image={image}
        />
      </div>

      <div className="d-flex align-items-center gap-3">
        <NavMiddleOffCanvas />
      </div>
    </div>
  );
}
