import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Exchange from "./Exchange";
import Language from "./Language";
import MyAccountDropDown from "./MyAccountDropDown";
import NavMiddle from "./NavMiddle";
import NavTopOffCanvas from "./NavTopOffCanvas";

export default function NavTop() {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  return (
    <>
      <div className="container-fluid  d-flex align-items-center justify-content-between">
        <div className="d-none d-sm-block">
          <div className="d-flex align-content-around gap-2 small ">
            <Link href={"/support"}>
              <p className={path === "support" ? "nav_active cursor-pointer_hover color-black small fw-semibold" : " cursor-pointer_hover color-black small fw-semibold"}>Support</p>
            </Link>

            <Link href={"/our-stores"}>
              <p className={path === "our-stores" ? "nav_active cursor-pointer_hover color-black small fw-semibold" : " cursor-pointer_hover color-black small fw-semibold"}>Store Locator</p>
            </Link>

            <Link href={"track-order"}>
              <p className={path === "track-order" ? "nav_active cursor-pointer_hover color-black small fw-semibold" : " cursor-pointer_hover color-black small fw-semibold"}>Track Your Order</p>
            </Link>
          </div>
        </div>

        <div className="small">
          <p className="cursor-pointer_hover color-black small fw-semibold">Call US : 9876435475</p>
        </div>

        <div className="d-none d-lg-block">
          <div className="d-flex align-content-around gap-3 small ">
            <MyAccountDropDown />
            <Exchange />
            <Language />
          </div>
        </div>

        <NavTopOffCanvas />
      </div>
      <hr className="m-0" />
      <NavMiddle />
    </>
  );
}
