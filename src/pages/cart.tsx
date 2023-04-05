import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import demo from "../assets/cameras/11.jpg";
import Link from "next/link";
import products from "../data/carts.json"

export default function Cart() {
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

  const [quantity, setQuantity] = useState(1);
  const quantityInc = () => {
    // setQuantity(quantity + 1);
  };
  const quantityDec = () => {
    // setQuantity(quantity - 1);
  };

  return (
    <div className="">
      <p className="px-2 h6 color-black mt-2">All Cart Items (4)</p>
      <hr className="my-0 mb-2 mt-2" />
      <div className="container">
        <div className="row mb-2">
          <div className="col-12 col-lg-6 d-flex flex-wrap">
            {products &&
              products.map((product: any, index) => (
                <div
                  key={index}
                  className="col-6 col-lg-4  border d-flex flex-column align-items-center justify-content-center py-3 ">
                  <Image
                    className=" no-selection cursor-pointer"
                    src={product.image}
                    objectFit="scale-down"
                    alt="img"
                    height={110}
                    width={110}
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

          <div className="col-12 col-lg-6 bg-custom-grey py-3 mt-4 mt-lg-0">
            <p className=" h4 color-black h1">Payment Info</p>
            <p className="small color-black mb-3">Choose your payemet option</p>
            <div className="form-check mb-2">
              <input
                className="form-check-input select_color_input_custom "
                type="radio"
                name="flexRadioDefault"
                id="credit"
              />
              <label
                className="form-check-label small  select_size_input_custom_label no-selection cursor-pointer color-black"
                htmlFor="credit">
                Credit Card
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input  select_color_input_custom"
                type="radio"
                name="flexRadioDefault"
                id="eSewa"
              />
              <label
                className="form-check-label small select_size_input_custom_label no-selection cursor-pointer color-black"
                htmlFor="eSewa">
                e-Sewa
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input select_color_input_custom"
                type="radio"
                name="flexRadioDefault"
                id="cash"
              />
              <label
                className="form-check-label small select_size_input_custom_label no-selection cursor-pointer color-black"
                htmlFor="cash">
                Cash On Delivery
              </label>
            </div>

            <p className="mt-4 color-black mb-3">Your Payment Details</p>
            <input
              className="form-control form-control-lg rounded-1  mb-2 "
              type="text"
              placeholder="Full Name"
            />

            <input
              className="form-control form-control-lg rounded-1  mb-2 "
              type="text"
              placeholder="Card Number"
            />

            <div className="row">
              <div className="col">
                <input
                  className="form-control form-control-lg rounded-1  mb-2 "
                  type="text"
                  placeholder="Exp Date"
                />
              </div>
              <div className="col">
                <input
                  className="form-control form-control-lg rounded-1  mb-2 "
                  type="text"
                  placeholder="CVV"
                />
              </div>
            </div>
            <button
              type="button"
              className="btn checkout_button  fw-semibold w-100 rounded-1">
              Confirm
            </button>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column mb-3 color-black">
          <p className="small">Delivery :NPR 43 </p>
          <p className="small  ">Product : NPR 5657.75</p>
          <p className="h6">Total : NPR 5657.75</p>
        </div>

        <Link href={"/"}>
          <p className="color-black cursor-pointer_hover mb-5 ">
            <span className="h3">←</span> Continue Shopping
          </p>
        </Link>
      </div>
    </div>
  );
}
