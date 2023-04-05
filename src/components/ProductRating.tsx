import React from "react";
import { Rating } from "react-simple-star-rating";

export default function ProductRating() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-3">
        <div className="col-12 col-lg-6">
          <div className=" mb-2">
            <label
              htmlFor="name"
              className="form-label fz_13 color-black ">
              Name
            </label>
            <input
              type="text"
              className="form-control  rounded-1  shadow-none"
              id="name"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="review"
              className="form-label fz_13 color-black mb-2">
              Review
            </label>
            <textarea
              className="form-control rounded-1 py-3 shadow-none"
              id="review"
            />
          </div>

          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn outline_button_selected rounded-1 px-5">
              Post
            </button>
          </div>
        </div>
      </div>

      <div className="my-4">
        <div className="d-flex align-items-center justify-content-between text-black">
          <div className="d-flex align-items-center gap-2">
            <p className=" h6">Lokendra Chaulagain </p> <p className="text-muted fz_12">April 3, 2022</p>{" "}
          </div>

          <Rating
            style={{ marginTop: "-20px" }}
            readonly
            initialValue={4}
            size={14}
          />
        </div>
        <p className="para_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, soluta. Possimus placeat expedita harum laboriosam quasi voluptatem at numquam odit illum ex nostrum quibusdam, dolores facere accusamus laudantium inventore asperiores aliquam magnam veniam aspernatur a voluptate similique saepe. Ad itaque laborum recusandae hic sit unde praesentium, dicta minus consectetur labore!</p>
      </div>
    </>
  );
}
