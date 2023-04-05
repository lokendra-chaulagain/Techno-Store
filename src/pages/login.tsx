import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const loginUser = async () => {
    try {
      toast.success("Login Success");
      console.log(handleAllField);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center my-5">
      <form
        onSubmit={handleSubmit(loginUser)}
        className="col-12 col-md-8 col-lg-6 col-xl-4 d-flex gap-2 flex-column align-items-center  ">
        <div>
          <p className="h3 mb-1 color-black fw-bold">Welcome back ! </p>
          <p className="small">Sign in to get the most out of Techno Store</p>
        </div>

        <div className=" w-100">
          <input
            type="email"
            className="form-control   rounded-1  "
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-danger fz_14 ">Email is required</span>}
        </div>

        <div className="  w-100">
          <input
            type="password"
            className="form-control  rounded-1  "
            placeholder="Password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && <span className="text-danger fz_14 ">Password is required of Length 6</span>}
        </div>

        <div className="w-100 d-flex  align-items-center justify-content-between ">
          <div className=" form-check ">
            <input
              type="checkbox"
              className="form-check-input  check_box shadow-none rounded-0 cursor-pointer"
              id="exampleCheck1"
            />
            <label
              className="form-check-label check_box  fz_14  no-selection cursor-pointer color-black "
              htmlFor="exampleCheck1">
              Accept Terms & Conditions
            </label>
          </div>
          <p className="forgot fz_12 text-decoration-underline color-black">Forgot Password?</p>
        </div>

        <button
          type="submit"
          className="btn w-100 bg-orange color-white rounded-1">
          Login
        </button>
        <small className=" text-muted">
          Do not have an account ?
          <Link href={"/register"}>
            <span className="forgot text-decoration-underline"> Register</span>
          </Link>
        </small>
      </form>
    </div>
  );
}
