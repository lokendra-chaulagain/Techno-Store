import React from "react";

export default function ProductRating() {
  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-center">
        <div className="for w-50 ">
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label h6 my_black mb-2">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-1 py-3 shadow-none"
              id="name"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="review"
              className="form-label h6 my_black mb-2">
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

      <div>
        <div className="d-flex align-items-center justify-content-between mb-1">
          <p className="my-0">
            <span className="h6 text_color">Lokendra Chaulagain :</span> <span className="text-muted small">April 3, 2022</span>{" "}
          </p>
          <div>Rating Star here</div>
        </div>
        <p className="para_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, soluta. Possimus placeat expedita harum laboriosam quasi voluptatem at numquam odit illum ex nostrum quibusdam, dolores facere accusamus laudantium inventore asperiores aliquam magnam veniam aspernatur a voluptate similique saepe. Ad itaque laborum recusandae hic sit unde praesentium, dicta minus consectetur labore!</p>
        <hr />
      </div>

      <div>
        <div className="d-flex align-items-center justify-content-between mb-1">
          <p className="my-0">
            <span className="h6 text_color">Lokendra Chaulagain :</span> <span className="text-muted small">April 3, 2022</span>{" "}
          </p>
          <div>Rating Star here</div>
        </div>
        <p className="para_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, soluta. Possimus placeat expedita harum laboriosam quasi voluptatem at numquam odit illum ex nostrum quibusdam, dolores facere accusamus laudantium inventore asperiores aliquam magnam veniam aspernatur a voluptate similique saepe. Ad itaque laborum recusandae hic sit unde praesentium, dicta minus consectetur labore!</p>
        <hr />
      </div>

      <div>
        <div className="d-flex align-items-center justify-content-between mb-1">
          <p className="my-0">
            <span className="h6 text_color">Lokendra Chaulagain :</span> <span className="text-muted small">April 3, 2022</span>{" "}
          </p>
          <div>Rating Star here</div>
        </div>
        <p className="para_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, soluta. Possimus placeat expedita harum laboriosam quasi voluptatem at numquam odit illum ex nostrum quibusdam, dolores facere accusamus laudantium inventore asperiores aliquam magnam veniam aspernatur a voluptate similique saepe. Ad itaque laborum recusandae hic sit unde praesentium, dicta minus consectetur labore!</p>
        <hr />
      </div>
    </div>
  );
}
