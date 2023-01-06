import Image from "next/image";
import React from "react";
import watch1 from "../assets/w1.jpg";
import watch2 from "../assets/w2.jpg";
import watch3 from "../assets/w3.jpg";
import line1 from "../assets/line-1.png";
import line2 from "../assets/line-2.png";

export default function ProductDetailSection() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h5 className="my_black">Wireless</h5>
          <p className="para_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis reiciendis officia consequuntur expedita tempore reprehenderit est quo similique magni. Autem, dicta iure sint ipsam quam iusto laborum velit aspernatur, adipisci, quas incidunt perspiciatis. Modi!</p>

          <h5 className="my_black">Wireless</h5>
          <p className="para_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis reiciendis officia consequuntur expedita tempore reprehenderit est quo similique magni. Autem, dicta iure sint ipsam quam iusto laborum velit aspernatur, adipisci, quas incidunt perspiciatis. Modi!</p>

          <h5 className="my_black">Wireless</h5>
          <p className="para_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis reiciendis officia consequuntur expedita tempore reprehenderit est quo similique magni. Autem, dicta iure sint ipsam quam iusto laborum velit aspernatur, adipisci, quas incidunt perspiciatis. Modi!</p>

          <h5 className="my_black">Wireless</h5>
          <p className="para_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis reiciendis officia consequuntur expedita tempore reprehenderit est quo similique magni. Autem, dicta iure sint ipsam quam iusto laborum velit aspernatur, adipisci, quas incidunt perspiciatis. Modi!</p>
        </div>
        <div className="col">
          <Image
            className=" no_selection cp"
            src={watch1}
            objectFit="scale-down"
            alt="img"
            height={300}
            width={400}
          />
          <h5 className="my_black mt-5">Wireless5</h5>
          <p className="para_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ullam doloremque cumque distinctio necessitatibus explicabo magni dolorum, dolore dolor maxime!</p>
        </div>
      </div>

      <div className="row">
        <div className="col-3 mt-5 pt-5">
          <Image
            className=" no_selection cp "
            src={line1}
            objectFit="scale-down"
            alt="img"
          />
        </div>

        <div className="col-4 mt-5">
          <h5 className="my_black text-center">Wireless</h5>
          <p className="para_text text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo corporis quo accusantium.</p>
        </div>

        <div className="col">
          <Image
            className=" no_selection cp "
            src={line2}
            objectFit="scale-down"
            alt="img"
          />
        </div>

        <div className="col">
          <Image
            className="  cp"
            src={watch2}
            objectFit="scale-down"
            alt="img"
            height={350}
            width={300}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Image
            className=" no_selection cp"
            src={watch3}
            objectFit="scale-down"
            alt="img"
            height={350}
            width={300}
          />
        </div>

        <div className="col">
          <h5 className="my_black">Wireless</h5>
          <p className="para_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ratione neque molestias consequuntur iste veritatis expedita, esse dignissimos quasi tenetur sed qui laboriosam vero voluptas molestiae, commodi dolores. Saepe deserunt est quas non! Ab, nemo iste. Unde amet maxime eaque labore eum veritatis dolore numquam quam corporis iste, laboriosam autem. Laboriosam animi, corrupti unde illo reiciendis voluptate deleniti magnam. Labore.</p>
        </div>
      </div>
    </div>
  );
}
