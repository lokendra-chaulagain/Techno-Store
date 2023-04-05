import Link from "next/link";
import React from "react";
import { BiCategoryAlt } from "react-icons/bi";

export default function NavMiddleOffCanvas() {
  return (
    <div className="d-block d-lg-none">
      <BiCategoryAlt
        className="cursor-pointer fw-normal hover_underline"
        size={24}
        data-bs-toggle="offcanvas"
        data-bs-target="#navMiddleOffCanvas"
        aria-controls="navMiddleOffCanvas"
      />

      <div
        className="offcanvas offcanvas-end"
        id="navMiddleOffCanvas"
        aria-labelledby="navMiddleOffCanvasLabel">
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title"
            id="navMiddleOffCanvasLabel">
            MENU
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <hr />
        <div className="offcanvas-body d-flex flex-column gap-2 color-black fz_15 h6">
          <p
            className="  h5 mt-3"
            data-bs-dismiss="offcanvas">
            QUICK LINKS
          </p>
          <hr className="m-0 mb-1" />

          <Link href={"/"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Home
            </p>
          </Link>

          <Link href={"/order"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Track Your Order
            </p>
          </Link>

          <Link href={"/support"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Support Center
            </p>
          </Link>

          <Link href={"/our-stores"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Store Locator
            </p>
          </Link>

          <Link href={"/register"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Login
            </p>
          </Link>

          <Link href={"/cart"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              My Cart
            </p>
          </Link>

          <Link href={"/bookmark"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Bookmark
            </p>
          </Link>

          <p
            className="l h5 mt-3"
            data-bs-dismiss="offcanvas">
            CATEGORIES
          </p>
          <hr className="m-0 mb-1" />

          <Link href={"/category/laptops-and-computers"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Laptops and Computers
            </p>
          </Link>

          <Link href={"/category/phone-and-watches"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Phone and Watches
            </p>
          </Link>

          <Link href={"/category/heaters-and-fans"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Heaters and Fans
            </p>
          </Link>

          <Link href={"/category/speakers"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Speakers
            </p>
          </Link>

          <Link href={"/category/rice-cookers"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Rice Cookers
            </p>
          </Link>

          <Link href={"/category/electric-kettles"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Electric Kettles
            </p>
          </Link>

          <Link href={"/category/hair-dryers"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Hair Dryers
            </p>
          </Link>

          <Link href={"/category/drones"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Drones
            </p>
          </Link>

          <Link href={"/category/cameras"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Cameras
            </p>
          </Link>

          <Link href={"/category/games"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Games
            </p>
          </Link>

          <Link href={"/category/accessories"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Accessories
            </p>
          </Link>

          <p
            className=" h5 mt-3"
            data-bs-dismiss="offcanvas">
            OTHERS
          </p>
          <hr className="m-0 mb-1" />

          <Link href={"/terms-conditions"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Terms and Conditions
            </p>
          </Link>

          <Link href={"/privacy-policy"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Privacy Policy
            </p>
          </Link>

          <Link href={"/contact"}>
            <p
              className="cursor-pointer fw-normal hover_underline"
              data-bs-dismiss="offcanvas">
              Contact Us
            </p>
          </Link>

          <p className="fz_13 mt-4 mb-1 text-muted text-center">
            Designed & Developed By{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href="https://lokendra-portfolio.vercel.app">
              Lokendra Chaulagain
            </a>{" "}
            . No Right Reserved , Free To Use .
          </p>
        </div>
      </div>
    </div>
  );
}
