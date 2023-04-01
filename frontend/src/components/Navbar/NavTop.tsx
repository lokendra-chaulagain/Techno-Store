import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Exchange from "./Exchange";
import Language from "./Language";
import MyAccountDropDown from "./MyAccountDropDown";
import NavMiddle from "./NavMiddle";

export default function NavTop() {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  console.log(path);

  return (
    <>
      <div className="px-5 pt-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-content-around gap-2 small">
          <Link href={"/support"}>
            <span className={path === "support" ? "nav_active cp_hover black_text_color h6" : " cp_hover black_text_color h6"}>Support</span>
          </Link>

          <Link href={"/our-stores"}>
            <span className={path === "our-stores" ? "nav_active cp_hover black_text_color h6" : " cp_hover black_text_color h6"}>Store Locator</span>
          </Link>

          <Link href={"track-order"}>
            <span className={path === "track-order" ? "nav_active cp_hover black_text_color h6" : " cp_hover black_text_color h6"}>Track Your Order</span>
          </Link>
        </div>
        <div>
          <small className="cp_hover black_text_color h6">Call US : 9876435475</small>
        </div>
        <div className="d-flex align-content-around gap-3 small">
          <MyAccountDropDown />
          <Exchange />
          <Language />
        </div>
      </div>
      <hr className="my-2" />
      <NavMiddle />
    </>
  );
}
