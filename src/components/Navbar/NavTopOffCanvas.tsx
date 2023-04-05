import Link from "next/link";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";

export default function NavTopOffCanvas() {
  return (
    <div className="d-block d-lg-none">
      <FiMoreVertical
        size={20}
        data-bs-toggle="offcanvas"
        data-bs-target="#navTopOffCanvas"
        aria-controls="navTopOffCanvas"
      />

      <div
        className="offcanvas offcanvas-start"
        id="navTopOffCanvas"
        aria-labelledby="navTopOffCanvasLabel">
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title"
            id="navTopOffCanvasLabel">
            Quick Links
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <hr />
        <div className="offcanvas-body d-flex flex-column gap-2 h6">
          <Link href={"/"}>
            <p
              className="cursor-pointer"
              data-bs-dismiss="offcanvas">
              Home
            </p>
          </Link>

          <Link href={"/track-order"}>
            <p
              className="cursor-pointer"
              data-bs-dismiss="offcanvas">
              Track Your Order
            </p>
          </Link>

          <Link href={"/support"}>
            <p
              className="cursor-pointer"
              data-bs-dismiss="offcanvas">
              Support Center
            </p>
          </Link>

          <Link href={"/our-stores"}>
            <p
              className="cursor-pointer"
              data-bs-dismiss="offcanvas">
              Store Locator
            </p>
          </Link>

          <Link href={"/login"}>
            <p
              className="cursor-pointer"
              data-bs-dismiss="offcanvas">
              Login
            </p>
          </Link>

          <Link href={"/register"}>
            <p
              className="cursor-pointer"
              data-bs-dismiss="offcanvas">
              Login
            </p>
          </Link>

          <Link href={"/cart"}>
            <p
              className="cursor-pointer"
              data-bs-dismiss="offcanvas">
              My Cart
            </p>
          </Link>

          <Link href={"/bookmark"}>
            <p
              className="cursor-pointer"
              data-bs-dismiss="offcanvas">
              Bookmark
            </p>
          </Link>

          <hr className="" />

          <Link href={"/contact"}>
            <p
              className="cursor-pointer"
              data-bs-dismiss="offcanvas">
              Contact Us
            </p>
          </Link>

          <Link href={"/privacy-policy"}>
            <p
              className="cursor-pointer"
              data-bs-dismiss="offcanvas">
              Privacy Policy
            </p>
          </Link>

          <Link href={"/terms-conditions"}>
            <p
              className="cursor-pointer"
              data-bs-dismiss="offcanvas">
              Terms and Conditions
            </p>
          </Link>

          <hr />

          <select
            className="form-select shadow-none rounded-1"
            aria-label="Language select ">
            <option selected>Select Language</option>
            <option value="nepali">Nepali</option>
            <option value="english">English</option>
          </select>
        </div>
      </div>
    </div>
  );
}
