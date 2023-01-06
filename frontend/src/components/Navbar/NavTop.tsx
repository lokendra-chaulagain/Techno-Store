import React from "react";
import Exchange from "./Exchange";
import Language from "./Language";
import MyAccountDropDown from "./MyAccountDropDown";

export default function NavTop() {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-between">
        <div className="d-flex align-content-around gap-2 small">
          <span className="cp_hover my_black h6">Support</span>|<span className="cp_hover my_black h6">Store Locator</span>|<span className="cp_hover my_black h6">Track Your Order</span>
        </div>
        <div>
          <small className="cp_hover my_black h6">Call US : 9876435475</small>
        </div>
        <div className="d-flex align-content-around gap-3 small">
          <MyAccountDropDown />
          <Exchange />
          <Language />
        </div>
      </div>
      <hr className="my-2" />
    </>
  );
}
