import React from "react";
import styles from "../styles/Support.module.css";
import OurServices from "../components/OurServices";

export default function Support() {
  const datas = [
    {
      id: "1",
      question: "What is your international returns policy?",
      answer: "Our international returns policy is simple and straightforward. If you need to return an item, please contact our customer service team within 14 days of receiving your order to initiate the process. You will be responsible for any shipping costs associated with returning the item. Once we receive the item, we will process your refund or exchange within 5-7 business days. For more information, please contact us.",
    },

    {
      id: "1",
      question: "How can I find your international delivery policy?",
      answer: "Thank you for your interest in our international delivery policy. You can find all the information regarding our international shipping policy on our website under the shipping and delivery section. If you have any further questions, please don't hesitate to contact our customer service team.",
    },

    {
      id: "1",
      question: "What should I do if my order hasn't been delivered yet?",
      answer: "If your order has not been delivered yet, please check the tracking information provided in your shipping confirmation email for updates on the status of your shipment. If there is no tracking information available or if you have any concerns about the delivery of your order, please contact our customer service team and we will be happy to assist you.",
    },

    {
      id: "1",
      question: "I'm an international customer, have you received my returned items?",
      answer: "If you are an international customer and have returned an item, please allow 5-10 business days for us to receive and process your return. Once we receive the item, we will inspect it and process your refund or exchange within 5-7 business days. If you have any concerns about the status of your return, please don't hesitate to contact our customer service team and we will be happy to assist you.ooo",
    },

    {
      id: "1",
      question: "How can I get a new returns note?",
      answer: "If you need a new returns note, please contact our customer service team and we will be happy to assist you. We can provide you with a new returns note via email or mail, depending on your preference. Please have your order number and any relevant information ready when you contact us.",
    },
  ];

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
