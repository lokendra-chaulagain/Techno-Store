import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  let handleAllField: any = watch();

  const sendMail = async () => {
    reset();
  };

  return (
    <div className="row color-black">
      <h1 className="fw-bold mt-5 mb-3 text_color_blue my_custom_text_muted">
        Get In Touch With Us <span className="text_color_red">!</span>{" "}
      </h1>

      <div className="col-12 col-md-6 pb-5 pb-md-0 text_color_blue  ">
        <h5 className="pt-4 mb-1 fw-bold my_custom_text_muted ">Email</h5>
        <div className="d-flex align-items-center  gap-1">
          <AiOutlineMail />
          <p className="my-0"> gemplastic@gmail.com</p>
        </div>

        <h5 className="pt-4 mb-1 fw-bold my_custom_text_muted">Address</h5>
        <div className="d-flex align-items-center gap-1">
          <HiOutlineLocationMarker />
          <p className="my-0"> Basundhara, (Near Maharajgunj Ringroad)</p>
        </div>

        <h5 className="pt-4 mb-1 fw-bold my_custom_text_muted">Contact Numbers</h5>
        <div className="d-flex align-items-center gap-1">
          <BiPhone />
          <p className="my-0">5528877, 5528981</p>
        </div>

        <h5 className="pt-4 mb-1 fw-bold my_custom_text_muted">Time we work</h5>
        <div className="d-flex align-items-center gap-1">
          <FiClock />
          <p className="my-0">Mon - Sat : 8:00AM - 6:00AM</p>
        </div>
      </div>

      <form
        className="col-12 col-md-6  text_color_blue "
        onSubmit={handleSubmit(sendMail)}>
        <div>
          <input
            autoComplete="off"
            className="contact_input_field form-control form-control-lg px-2"
            type="text"
            aria-label=".form-control-lg example"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-danger">{`${errors.name.message}`}</p>}
        </div>

        <div>
          <input
            autoComplete="off"
            className="contact_input_field form-control form-control-lg px-2"
            type="text"
            placeholder="Email"
            aria-label=".form-control-lg example"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-danger">{`${errors.email.message}`}</p>}
        </div>

        <div>
          <input
            autoComplete="false"
            className="contact_input_field form-control form-control-lg px-2"
            type="number"
            placeholder="Phone"
            aria-label=".form-control-lg example"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && <p className="text-danger">{`${errors.phone.message}`}</p>}
        </div>

        <div>
          <textarea
            className="contact_input_field  form-control form-control-lg px-2"
            placeholder="Message"
            aria-label=".form-control-lg example"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <p className="text-danger">{`${errors.message.message}`}</p>}
        </div>

        <div className="d-flex align-items-center justify-content-end mt-4">
          <button
            type="submit"
            className="send_button px-4 ">
            Send Message
          </button>
        </div>
      </form>
      <div>
        <div className="google_map_section">
          <h1 className="fw-bold py-5 text_color_blue my_custom_text_muted">
            Want To Visit Us <span className="text_color_red">!</span>{" "}
          </h1>

          <iframe
            className="google_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.3261328!3d27.708960349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1680332874377!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: "6" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
