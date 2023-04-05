import React from "react";
import styles from "../styles/Support.module.css";
import OurServices from "../components/OurServices";
import datas from "../data/qnas.json";

export default function Support() {
  return (
    <div className="container mb-5">
      <p className="h4 text-center my-4 color-black">Answers to Your Questions</p>

      <div className="d-flex justify-content-center ">
        <div
          className="accordion d-flex flex-column gap-3 accordion-flush w-100 "
          id="accordionFlushExample">
          {datas &&
            datas.map((data: any, id: any) => (
              <div
                key={id}
                className={`${styles.accordion_item} accordion-item`}>
                <h2 className="accordion-header">
                  <button
                    className={`${styles.accordion_button} p text-muted   accordion-button collapsed`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${id}`}
                    aria-expanded="false">
                    {data.question}
                  </button>
                </h2>
                <div
                  id={`collapse-${id}`}
                  className="accordion-collapse collapse border-bottom-0">
                  <div className="accordion-body color-black">{data.answer} </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <OurServices />
    </div>
  );
}
