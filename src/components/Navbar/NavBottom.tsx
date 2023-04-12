import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaStoreAlt } from "react-icons/fa";
import { useGetAllCategoryQuery } from "../../redux/api/globalApi";

export default function NavBottom() {
  const { data: categories } = useGetAllCategoryQuery();

  return (
    <div className="bg-orange">
      <div className="bottom_nav gap-5 container py-3">
        <p className="text-center color-black cursor-pointer fz_12 fw-semibold lh-sm d-none d-lg-block">Help Line 9876435475</p>
        <div className="input-group  rounded-5">
          <button
            className="btn global-dark-button  d-none d-md-block fz_12  dropdown-toggle rounded-start-4 "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Categories
          </button>

          <ul className="dropdown-menu no-selection rounded-0 ">
            {categories &&
              categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/category/${category.name}`}>
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
          <div className=" d-flex text-muted gap-4 ">
            <Link href={"/order"}>
              <div>
                <TbTruckDelivery
                  size={22}
                  className="nav-icon-hover"
                />
              </div>
            </Link>

            <Link href={"/our-stores"}>
              <div>
                <FaStoreAlt
                  size={22}
                  className="nav-icon-hover"
                />
              </div>
            </Link>

            <Link href={"/bookmark"}>
              <div>
                <AiOutlineHeart
                  size={22}
                  className="nav-icon-hover"
                />
              </div>
            </Link>

            <Link href={"/cart"}>
              <div>
                <AiOutlineShoppingCart
                  size={22}
                  className="nav-icon-hover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
