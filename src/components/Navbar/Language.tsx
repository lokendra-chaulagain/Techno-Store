import React from "react";

export default function Language() {
  return (
    <div>
      <div className="dropdown ">
        <span
          className=" cursor-pointer-hover color-black no-selection small fw-semibold"
          data-bs-toggle="dropdown">
          Language^
        </span>
        <ul className="dropdown-menu rounded-0 fz_12">
          <li>
            <a className="dropdown-item cursor-pointer fw-semibold">English</a>
          </li>
          <li>
            <a className="dropdown-item cursor-pointer fw-semibold">Nepali</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
