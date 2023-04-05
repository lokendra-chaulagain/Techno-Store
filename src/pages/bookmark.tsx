import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import demo from "../assets/banner-2.png";
import BestSellerCarousel from "../components/home/BestSellerCarousel";
import products from "../data/category/sellings.json";
import carts from "../data/carts.json";

export default function Bookmark() {
  const removesSuccess = () => toast(" ✅ Delete Success");
  const addedCartSuccess = () => toast(" ✅ Added To Cart");
  const somethingWentWrong = () => toast(" ❌ Something Went Wrong");

  const handleRemove = async () => {
    try {
      removesSuccess();
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const handleAddToCart = async () => {
    try {
      addedCartSuccess();
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <div className="">
      <div className=" container mt-2">
        <p className="text-center py-2 bg-dark color-white ">Bookmarked Items</p>
        <div className="  d-flex flex-wrap">
          {carts &&
            carts.map((product: any, index) => (
              <div
                key={index}
                className="col-6 col-lg-4  border d-flex flex-column align-items-center py-2">
                <Image
                  className=" no-selection cursor-pointer"
                  src={demo}
                  objectFit="scale-down"
                  alt="img"
                  height={60}
                  width={60}
                />
                <p className="color-black fz_13">Apple iPad Mini G2356</p>
                <p className="color-orange fz_12">NPR. 15300</p>{" "}
                <MdDeleteOutline
                  onClick={handleRemove}
                  size={18}
                  className="cursor-pointer mt-1 color-black"
                />
              </div>
            ))}
        </div>

        <BestSellerCarousel products={products} />
      </div>
    </div>
  );
}
