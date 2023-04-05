import Image from "next/image";
import React from "react";
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
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Footer() {
  const { register, handleSubmit, watch, reset } = useForm();
  const handleAllField = watch();

  const handleSubscribe = async () => {
    try {
      console.log(handleAllField.email);
      toast.success("Subscribe Success");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="px-4 px-sm-5 bg-custom-grey py-5">
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-3 text-muted px-0 ">
            <Link href={"/"}>
              <div className="d-flex align-items-center gap-1 cursor-pointer no-selection">
                <p className="color-orange h2">Techno</p>
                <p className="color-black h3">store</p>{" "}
              </div>
            </Link>
            <p className="my-0 mt-3 ">Got Questions ? Call us 24/7!</p>
            <h5 className="my-0 mt-1">Call Us: 98894556426</h5>
            <p className="my-0 mt-1 ">PO Box CT16122 New Baneshwor</p>
            <p className="my-0 mt-1 ">Kathmandu, Ward-32 </p>
            <p className="my-0 mt-1 ">Nepal.</p>

            <div className="d-flex gap-3 mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://web.whatsapp.com/">
                {" "}
                <FaWhatsapp className="footer_icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com">
                {" "}
                <AiOutlineGoogle className="footer_icon" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com">
                {" "}
                <AiFillLinkedin className="footer_icon" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com">
                {" "}
                <FaFacebookF className="footer_icon" />
              </a>
            </div>
          </div>

          <div className="col-12 mt-5 mt-md-0 col-md-6 col-lg-3 text-muted px-0 no-selection">
            <h5>Find By Categories</h5>
            <Link href={"/category/smart-phones"}>
              <p className="my-0 mt-2 my_link">Smart Phones</p>
            </Link>
            <Link href={"/category/games"}>
              <p className="my-0 mt-2 my_link">Games</p>
            </Link>

            <Link href={"/category/computers"}>
              <p className="my-0 mt-2 my_link">Computers</p>
            </Link>

            <Link href={"/category/watches"}>
              <p className="my-0 mt-2 my_link">Watches</p>
            </Link>

            <Link href={"/category/cameras"}>
              <p className="my-0 mt-2 my_link">Cameras</p>
            </Link>
          </div>

          <div className="col-12  mt-5 mt-lg-0 col-md-6 col-lg-3 text-muted px-0 no-selection">
            <h5>Customer Care</h5>
            <Link href={"/contact"}>
              <p className="my-0 mt-2 my_link">Contact Us</p>
            </Link>

            <Link href={"/bookmark"}>
              <p className="my-0 mt-2 my_link">My Bookmark</p>
            </Link>
            <Link href={"/privacy-policy"}>
              <p className="my-0 mt-2 my_link">Privacy Policy.</p>
            </Link>
            <Link href={"/terms-conditions"}>
              <p className="my-0 mt-2 my_link">Terms & Conditions.</p>
            </Link>

            <Link href={"/cart"}>
              <p className="my-0 mt-2 my_link">My Cart</p>
            </Link>
          </div>

          <div className="col-12 col-sm-9 mt-5 mt-lg-0 col-md-6 col-lg-3 text-muted px-0">
            <h5>Sign Up To New Letter</h5>
            <p>By signing up for our newsletter, you will be the first to know about new product launches, special promotions, and valuable insights that can help you get the most out of our offerings.</p>

            <form
              onSubmit={handleSubmit(handleSubscribe)}
              className="input-group mt-1 mb-3">
              <input
                type="email"
                className="form-control input_form rounded-1 py-2 shadow-none"
                placeholder="Email"
                {...register("email", { required: true, minLength: 6 })}
              />
              <button
                className="btn bg-orange rounded-1 color-white fw-semibold py-2 outline-none"
                type="submit"
                id="button-addon2">
                Button
              </button>
            </form>

            <div className="d-flex align-items-center justify-content-between">
              <Image
                className=" no-selection cursor-pointer"
                src={paypal}
                objectFit="scale-down"
                alt="img"
              />

              <Image
                className=" no-selection cursor-pointer"
                src={discover}
                objectFit="scale-down"
                alt="img"
              />

              <Image
                className=" no-selection cursor-pointer"
                src={visa}
                objectFit="scale-down"
                alt="img"
              />

              <Image
                className=" no-selection cursor-pointer"
                src={master}
                objectFit="scale-down"
                alt="img"
              />

              <Image
                className=" no-selection cursor-pointer"
                src={american}
                objectFit="scale-down"
                alt="img"
              />
            </div>
          </div>
        </div>

        <div className="row d-flex align-items-center justify-content-center mt-5  ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.apple.com/app-store"
            className="col-12 col-sm-6 col-lg-3 p-0 pe-0 pe-sm-2 text-decoration-none">
            <div className="  footer_app_store_card rounded-2 ">
              <div className=" d-flex align-items-center gap-4">
                <Image
                  className=" no-selection cursor-pointer"
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
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com"
            className="col-12 col-sm-6 col-lg-3  p-0 ps-0 ps-sm-2 mt-3 mt-sm-0 text-decoration-none">
            <div className=" footer_app_store_card rounded-2">
              <div className="d-flex align-items-center gap-4">
                <Image
                  className=" no-selection cursor-pointer"
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
          </a>
        </div>
      </div>
      <p className="fz_13 mt-4 mb-1 text-muted text-center">
        Designed & Developed By{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="custom_orange_link"
          href="https://lokendra-portfolio.vercel.app">
          Lokendra Chaulagain
        </a>{" "}
        . No Right Reserved , Free To Use .
      </p>
    </>
  );
}
