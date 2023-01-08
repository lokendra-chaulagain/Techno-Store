import Link from "next/link";
import React from "react";

export default function MyAccountDropDown() {
  return (
    <div>
      <div className="dropdown">
        <span
          className="cp_hover my_black no_selection h6"
          data-bs-toggle="dropdown">
          My Account^
        </span>
        <ul className="dropdown-menu rounded-0">
          <li>
           <Link href={"/login"}>
           <a className="dropdown-item">Login</a>
           </Link>
          </li>
          <li>
          <Link href={"/bookmark"}>
            <a className="dropdown-item">BookMark</a>
            </Link>
          </li>
          <li>
          <Link href={"/cart"}>
            <a className="dropdown-item">My Cart</a>
            </Link>
          </li>
          <li>
          <Link href={"/register"}>
            <a className="dropdown-item">Register</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
