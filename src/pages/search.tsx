import React from "react";

import arrival1 from "../assets/cameras/9.jpg";
import arrival2 from "../assets/computers/1.jpg";
import arrival3 from "../assets/cookers/1.jpg";
import arrival4 from "../assets/drones/1.png";
import arrival5 from "../assets/fans/1.jpg";
import arrival6 from "../assets/games/1.png";
import arrival7 from "../assets/hair-dryers/1.jpg";
import arrival8 from "../assets/heaters/1.jpg";
import arrival9 from "../assets/kettles/1.jpg";
import arrival10 from "../assets/phone/1.jpg";
import arrival11 from "../assets/speakers/1.jpg";
import arrival12 from "../assets/watches/1.jpg";
import SingleProductSection from "../components/SingleProductSection";

export default function search() {
  const products = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival9,
    },

    {
      id: "10",
      category: "Games",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival11,
    },

    {
      id: "12",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: arrival12,
    },
  ];
  return (
    <div>
        <p className="color-black py-3 fw-semibold text-center">Similar product that you searched for </p>
      <SingleProductSection products={products} />
    </div>
  );
}
