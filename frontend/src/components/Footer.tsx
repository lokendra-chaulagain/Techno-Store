import Image from "next/image";
import React from "react";
import logo from "../assets/kogo.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineGoogle } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import paypal from "../assets/paypal.png";
import discover from "../assets/discover.png";
import visa from "../assets/visa.png";
import master from "../assets/master.png";
import american from "../assets/american.png";
import phone from "../assets/phone.png";
import android from "../assets/android.png";

export default function Footer() {
  return (
    <>
      <div className="px-5 footer_wrapper py-5">
        <div className="row  ">
          <div className="col text-muted ">
            <Image
              className=" no_selection cp"
              src={logo}
              objectFit="scale-down"
              alt="img"
            />
            <p className="my-0 mt-3 ">Got Questions ? Call us 24/7!</p>
            <h5 className="my-0 mt-1">Call Us: (888) 1234 56789</h5>
            <p className="my-0 mt-1 ">PO Box CT16122 Collins Street</p>
            <p className="my-0 mt-1 ">West, Victoria 8007,</p>
            <p className="my-0 mt-1 ">Australia.</p>

            <div className="d-flex gap-3 mt-3">
              <FaWhatsapp className="footer_icon" />
              <AiOutlineGoogle className="footer_icon" />
              <AiFillLinkedin className="footer_icon" />
              <FaWhatsapp className="footer_icon" />
              <FaFacebookF className="footer_icon" />
            </div>
          </div>
          <div className="col text-muted">
            <h5>Find By Categories</h5>
            <p className="my-0 mt-2 my_link">Lorem, ipsum.</p>
            <p className="my-0 mt-2 my_link">Lorem, ipsum.</p>
            <p className="my-0 mt-2 my_link">Lorem, ipsum.</p>
            <p className="my-0 mt-2 my_link">Lorem, ipsum.</p>
            <p className="my-0 mt-2 my_link">Lorem, ipsum.</p>
            <p className="my-0 mt-2 my_link">Lorem, ipsum.</p>
          </div>
          <div className="col text-muted">
            <h5>Customer Care</h5>
            <p className="my-0 mt-2 my_link">Contact Us</p>
            <p className="my-0 mt-2 my_link">My Bookmark</p>
            <p className="my-0 mt-2 my_link">Privacy Policy.</p>
            <p className="my-0 mt-2 my_link">Terms & Conditions.</p>
            <p className="my-0 mt-2 my_link">My Account.</p>
            <p className="my-0 mt-2 my_link">My Cart</p>
          </div>
          <div className="col text-muted">
            <h5>Sign Up To New Letter</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde veritatis officiis pariatur dolor ipsam quae atque. Commodi, mollitia rerum. Distinctio, voluptates!</p>

            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control input_form rounded-1 py-2 shadow-none"
                placeholder="Email"
              />
              <button
                className="btn bg_orange rounded-1 color_white fw-semibold py-2 outline-none"
                type="button"
                id="button-addon2">
                Button
              </button>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <Image
                className=" no_selection cp"
                src={paypal}
                objectFit="scale-down"
                alt="img"
              />

              <Image
                className=" no_selection cp"
                src={discover}
                objectFit="scale-down"
                alt="img"
              />

              <Image
                className=" no_selection cp"
                src={visa}
                objectFit="scale-down"
                alt="img"
              />

              <Image
                className=" no_selection cp"
                src={master}
                objectFit="scale-down"
                alt="img"
              />

              <Image
                className=" no_selection cp"
                src={american}
                objectFit="scale-down"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5 gap-5">
          <div className="footer_app_store_card rounded-2 ">
            <div className="d-flex align-items-center gap-4">
              <Image
                className=" no_selection cp"
                src={phone}
                objectFit="scale-down"
                alt="img"
              />
              <div className="text-muted">
                <h6 className="my-0">App Store</h6>
                <small className="my-0">Available on the</small>
              </div>
            </div>
          </div>

          <div className="footer_app_store_card rounded-2">
            <div className="d-flex align-items-center gap-4">
              <Image
                className=" no_selection cp"
                src={android}
                objectFit="scale-down"
                alt="img"
              />
              <div className="text-muted">
                <h6 className="my-0">Google Play </h6>
                <small className="my-0">Get in on</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="small mt-4 text-muted text-center">All Right Reserved 2022 </p>
    </>
  );
}
