import React from "react";

export default function Exchange() {
  return (
    <div>
      <div className="dropdown  ">
        <span
          className="cursor-pointer_hover color-black no-selection small fw-semibold"
          data-bs-toggle="dropdown">
          USD^
        </span>
        <ul className="dropdown-menu rounded-0 fz_12 ">
          <li>
            <a className="dropdown-item cursor-pointer fw-semibold">USD</a>
          </li>
          <li>
            <a className="dropdown-item cursor-pointer fw-semibold">NPR</a>
          </li>
          <li>
            <a className="dropdown-item cursor-pointer fw-semibold">INR</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
