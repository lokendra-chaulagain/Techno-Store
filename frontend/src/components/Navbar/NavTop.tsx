import React from "react";
import Exchange from "./Exchange";
import Language from "./Language";
import MyAccountDropDown from "./MyAccountDropDown";

export default function NavTop() {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-between">
        <div className="d-flex align-content-around gap-2 small">
          <span>Support</span>|<span>Store Locator</span>|<span>Track Your Order</span>
        </div>
        <div>
          <small>Call US : 9876435475</small>
        </div>
        <div className="d-flex align-content-around gap-3 small">
          <MyAccountDropDown />
          <Exchange />
          <Language />
        </div>
      </div>
      <hr  className="my-2"/>
    </>
  );
}
