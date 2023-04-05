import React, { useState } from "react";
import { Steps } from "antd";
import { useForm } from "react-hook-form";

export default function Order() {
  const [trackId, setTrackId] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const loginUser = async () => {
    console.log(handleAllField);
    try {
      reset();
      setTrackId(3);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-custom-grey  d-flex justify-content-center">
      <div className="bg-white container d-flex flex-column color-black align-items-center py-3 py-md-5 ">
        <p className="h5  ">Track Your Order</p>
        <p className="w-100 d-block d-lg-none my-2 text-md-center">Keep tabs on your delivery with our Track Your Order feature! Simply enter your tracking number or order details on our couriers website to get real-time updates on its location and delivery status. Enjoy peace of mind and stay in control of your delivery at all times.</p>
        <p className="w-75 d-none d-lg-block my-2 text-md-center">Keep tabs on your delivery with our Track Your Order feature! Simply enter your tracking number or order details on our couriers website to get real-time updates on its location and delivery status. Enjoy peace of mind and stay in control of your delivery at all times.</p>

        <form
          onSubmit={handleSubmit(loginUser)}
          className="">
          <div className=" my-2">
            <input
              type="number"
              className="form-control shadow-none rounded-pill"
              placeholder="Order ID"
              {...register("orderId ", { required: true })}
            />
            {errors.orderId && <span className="text-danger fw-semibold">Order Id required</span>}
          </div>

          <button
            type="submit"
            className="btn w-100 bg-orange color-white  rounded-pill">
            Track
          </button>
        </form>

        <div className="mt-5 ">
          <Steps
            current={trackId}
            direction="vertical"
            items={[
              {
                title: "Order Received",
                description: "The online store receives the order from the customer.",
              },
              {
                title: "Processing",
                description: "The store processes the order, verifies payment and availability of the item(s) ordered, and prepares the shipment.",
              },
              {
                title: "Shipped",
                description: "The item(s) is picked up by the shipping carrier and leaves the store's warehouse or fulfillment center.",
              },
              {
                title: "In Transit",
                description: "The item(s) is en route to the customer's delivery address.",
              },
              {
                title: "Out for Delivery",
                description: "The shipping carrier has the item(s) and is delivering it to the customer.",
              },

              {
                title: "Delivered",
                description: "The item(s) has been successfully delivered to the customer's delivery address.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
