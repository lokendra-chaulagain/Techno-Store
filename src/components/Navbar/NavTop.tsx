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
      <div className="container-fluid pt-2 d-flex align-items-center justify-content-between">
        <div className="d-none d-sm-block">
          <div className="d-flex align-content-around gap-2 small ">
            <Link href={"/support"}>
              <p className={path === "support" ? "nav_active cp_hover black_text_color h6" : " cp_hover black_text_color h6"}>Support</p>
            </Link>

            <Link href={"/our-stores"}>
              <p className={path === "our-stores" ? "nav_active cp_hover black_text_color h6" : " cp_hover black_text_color h6"}>Store Locator</p>
            </Link>

            <Link href={"track-order"}>
              <p className={path === "track-order" ? "nav_active cp_hover black_text_color h6" : " cp_hover black_text_color h6"}>Track Your Order</p>
            </Link>
          </div>
        </div>
        <div>
          <p className="cp_hover black_text_color h6">Call US : 9876435475</p>
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
      <hr className="my-2" />
      <NavMiddle />
    </>
  );
}
