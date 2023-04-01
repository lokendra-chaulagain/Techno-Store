import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";

export default function NavBottom() {
  const categories = [
    {
      name: "Smart Phones",
    },

    {
      name: "Games",
    },

    {
      name: "Computers",
    },

    {
      name: "Watches",
    },

    {
      name: "Cameras",
    },

    {
      name: "Speakers",
    },

    {
      name: "Rice Cookers",
    },

    {
      name: "Heaters",
    },

    {
      name: "Fans",
    },

    {
      name: "Electric Kettles",
    },

    {
      name: "Hair Dryers",
    },

    {
      name: "Drones",
    },

    {
      name: "Accessories",
    },
  ];
  return (
    <div className="bg_orange">
      <div className="bottom_nav gap-5 container py-3">
        <h6 className="text-center color_dark cp">Help Line 9876435475</h6>
        <div className="input-group yadav rounded-5">
          <button
            className="btn cat_button   py-3 dropdown-toggle rounded-start-4 "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Categories
          </button>
          <ul className="dropdown-menu no_selection rounded-0 " style={{width:"200px"}}>
            {categories.map((category, index) => (
              <li key={index}>
                <a className="dropdown-item cp black_text_color">{category.name}</a>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="form-control rounded-0 shadow-none py-3"
            aria-label="Text input with dropdown button"
          />
          <button
            type="button"
            className="btn search_button px-5 ">
            Search
          </button>
        </div>

        <div className="d-flex align-items-center text-muted gap-4">
          {/* <div className=" nav_circle rounded-circle p-2">
            <Link href={"/compare-product"}>
              <IoIosGitCompare size={25} />
            </Link>
          </div> */}

          <div className=" nav_circle  rounded-circle p-2">
            <Link href={"/bookmark"}>
              <AiOutlineHeart size={25} />
            </Link>
          </div>

          <div className=" nav_circle rounded-circle p-2">
            <Link href={"/cart"}>
              <AiOutlineShoppingCart size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
