import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();
  console.log(handleAllField);

  const registerUser = async () => {
    try {
      toast.success("Register Success");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex  align-items-center justify-content-center my-5 ">
      <form
        onSubmit={handleSubmit(registerUser)}
        className="col-12 col-md-8 col-lg-6 col-xl-4 d-flex gap-2 flex-column align-items-center login_form_box">
        <div className="">
          <p className="h3 mb-1 color-black fw-bold">Create an account. </p>
          <p className="small">Sign ip to get the most out of Techno Store</p>
        </div>

        <div className="w-100 mt-3">
          <input
            type="text"
            className="form-control  rounded-1  "
            placeholder="Full Name"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <span className="text-danger fz_14">Full Name is required</span>}
        </div>

        <div className="w-100">
          <input
            type="email"
            className="form-control  rounded-1  "
            placeholder="Email"
            {...register("email", { required: true, minLength: 6 })}
          />
          {errors.email && <span className="text-danger fz_14">Email is required of Length 6</span>}
        </div>

        <div className="w-100">
          <input
            type="password"
            className="form-control  rounded-1  "
            placeholder=" Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-danger fz_14"> Password is required</span>}
        </div>

        <div className="w-100 d-flex justify-content-between ">
          <div className=" form-check">
            <input
              type="checkbox"
              className="form-check-input check_box shadow-none rounded-0 cursor-pointer"
              id="exampleCheck1"
            />
            <label
              className="form-check-label fz_14 cursor-pointer no-selection  color-black"
              htmlFor="exampleCheck1">
              Accept Terms & Conditions
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn w-100 bg-orange color-white rounded-1">
          Login
        </button>
        <small className="pb-2 pt-2 text-muted">
          Already have an account ?{" "}
          <Link href={"login"}>
            <span className="forgot text-decoration-underline">Login</span>
          </Link>
        </small>
      </form>
    </div>
  );
}
