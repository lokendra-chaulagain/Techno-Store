import Link from "next/link";
import React from "react";

export default function MyAccountDropDown() {
  return (
    <div>
      <div className="dropdown small ">
        <span
          className="cursor-pointer-hover color-black no-selection  fw-semibold  "
          data-bs-toggle="dropdown">
          My Account^
        </span>
        <ul className="dropdown-menu rounded-0  fz_12 color-black  ">
          <li>
            <Link href={"/login"}>
              <a className="dropdown-item fw-semibold">Login</a>
            </Link>
          </li>
          <li>
            <Link href={"/bookmark"}>
              <a className="dropdown-item fw-semibold ">BookMark</a>
            </Link>
          </li>
          <li>
            <Link href={"/cart"}>
              <a className="dropdown-item fw-semibold ">My Cart</a>
            </Link>
          </li>
          <li>
            <Link href={"/register"}>
              <a className="dropdown-item fw-semibold">Register</a>
            </Link>
          </li>

          <li>
            <Link href={"/order"}>
              <a className="dropdown-item fw-semibold">Track My Orders</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
