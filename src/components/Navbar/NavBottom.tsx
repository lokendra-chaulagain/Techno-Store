import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import categories from "../../data/categories.json";

export default function NavBottom() {
  return (
    <div className="bg-orange">
      <div className="bottom_nav gap-5 container py-3">
        <p className="text-center color-dark cursor-pointer fz_12 fw-semibold lh-sm d-none d-lg-block">Help Line 9876435475</p>
        <div className="input-group  rounded-5">
          <button
            className="btn global-dark-button  d-none d-md-block fz_12  dropdown-toggle rounded-start-4 "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Categories
          </button>

          <ul className="dropdown-menu no-selection rounded-0 ">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/category/${category.slug}`}>
                <li>
                  <a className="dropdown-item cursor-pointer color-black fz_12">{category.name}</a>
                </li>
              </Link>
            ))}
          </ul>

          <input
            type="text"
            className="form-control rounded-0 "
            aria-label="Text input with dropdown button"
            placeholder="iphone 12"
          />
          <Link href={"/search"}>
            <button
              type="button"
              className="btn global-dark-button px-3 px-md-5 fz_12 ">
              Search
            </button>
          </Link>
        </div>

        <div className="d-none d-md-block">
          <div className=" d-flex text-muted gap-4 d-flex  ">
            <Link href={"/compare-product"}>
              <IoIosGitCompare
                size={22}
                className="nav-icon-hover"
              />
            </Link>

            <Link href={"/bookmark"}>
              <AiOutlineHeart
                size={22}
                className="nav-icon-hover"
              />
            </Link>

            <Link href={"/cart"}>
              <AiOutlineShoppingCart
                size={22}
                className="nav-icon-hover"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
