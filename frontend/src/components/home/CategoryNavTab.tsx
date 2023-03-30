import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import phone1 from "../../assets/phone/2.jpg";
import phone2 from "../../assets/phone/3.jpg";
import phone3 from "../../assets/phone/1.jpg";
import phone4 from "../../assets/phone/4.jpg";
import phone5 from "../../assets/phone/5.jpg";
import phone6 from "../../assets/phone/6.jpg";
import phone7 from "../../assets/phone/7.jpg";
import phone8 from "../../assets/phone/8.jpg";
import phone9 from "../../assets/phone/9.jpg";
import phone10 from "../../assets/phone/10.jpg";
import phone11 from "../../assets/phone/11.png";
import phone12 from "../../assets/phone/12.jpg";

import game1 from "../../assets/games/1.png";
import game2 from "../../assets/games/2.jpg";
import game3 from "../../assets/games/3.jpg";
import game4 from "../../assets/games/4.jpg";
import game5 from "../../assets/games/5.jpg";
import game6 from "../../assets/games/6.jpg";
import game7 from "../../assets/games/7.jpg";
import game8 from "../../assets/games/8.jpg";
import game9 from "../../assets/games/9.jpg";
import game10 from "../../assets/games/10.jpg";
import game11 from "../../assets/games/11.jpg";
import game12 from "../../assets/games/12.jpg";

import computer1 from "../../assets/computers/1.jpg";
import computer2 from "../../assets/computers/2.jpg";
import computer3 from "../../assets/computers/3.jpg";
import computer4 from "../../assets/computers/4.png";
import computer5 from "../../assets/computers/5.jpg";
import computer6 from "../../assets/computers/6.jpg";
import computer7 from "../../assets/computers/7.jpg";
import computer8 from "../../assets/computers/8.jpg";
import computer9 from "../../assets/computers/9.jpg";
import computer10 from "../../assets/computers/10.jpg";
import computer11 from "../../assets/computers/11.jpg";
import computer12 from "../../assets/computers/12.png";

import watch1 from "../../assets/watches/1.jpg";
import watch2 from "../../assets/watches/2.jpg";
import watch3 from "../../assets/watches/3.jpg";
import watch4 from "../../assets/watches/4.jpg";
import watch5 from "../../assets/watches/5.jpg";
import watch6 from "../../assets/watches/6.jpg";
import watch7 from "../../assets/watches/7.jpg";
import watch8 from "../../assets/watches/8.jpg";
import watch9 from "../../assets/watches/9.jpg";
import watch10 from "../../assets/watches/10.jpg";
import watch11 from "../../assets/watches/11.jpg";
import watch12 from "../../assets/watches/12.jpg";

import camera1 from "../../assets/cameras/1.jpg";
import camera2 from "../../assets/cameras/2.jpg";
import camera3 from "../../assets/cameras/3.jpg";
import camera4 from "../../assets/cameras/4.jpg";
import camera5 from "../../assets/cameras/5.jpg";
import camera6 from "../../assets/cameras/6.jpg";
import camera7 from "../../assets/cameras/7.jpg";
import camera8 from "../../assets/cameras/8.jpg";
import camera9 from "../../assets/cameras/9.jpg";
import camera10 from "../../assets/cameras/10.jpg";
import camera11 from "../../assets/cameras/11.jpg";
import camera12 from "../../assets/cameras/12.jpg";

import heater1 from "../../assets/heaters/1.jpg";
import heater2 from "../../assets/heaters/2.jpg";
import heater3 from "../../assets/heaters/3.jpg";
import heater4 from "../../assets/heaters/4.jpg";
import heater5 from "../../assets/heaters/5.jpg";
import heater6 from "../../assets/heaters/6.jpg";
import heater7 from "../../assets/heaters/7.jpg";
import heater8 from "../../assets/heaters/8.jpg";
import heater9 from "../../assets/heaters/9.jpg";
import heater10 from "../../assets/heaters/10.jpg";
import heater11 from "../../assets/heaters/11.png";
import heater12 from "../../assets/heaters/12.jpg";

import speaker1 from "../../assets/speakers/1.jpg";
import speaker2 from "../../assets/speakers/2.jpg";
import speaker3 from "../../assets/speakers/3.jpg";
import speaker4 from "../../assets/speakers/4.png";
import speaker5 from "../../assets/speakers/5.png";
import speaker6 from "../../assets/speakers/6.jpg";
import speaker7 from "../../assets/speakers/7.png";
import speaker8 from "../../assets/speakers/8.jpg";
import speaker9 from "../../assets/speakers/9.jpg";
import speaker10 from "../../assets/speakers/10.png";
import speaker11 from "../../assets/speakers/11.jpg";
import speaker12 from "../../assets/speakers/12.jpg";

import cooker1 from "../../assets/cookers/1.jpg";
import cooker2 from "../../assets/cookers/2.jpg";
import cooker3 from "../../assets/cookers/3.jpg";
import cooker4 from "../../assets/cookers/4.jpg";
import cooker5 from "../../assets/cookers/5.jpg";
import cooker6 from "../../assets/cookers/6.jpg";
import cooker7 from "../../assets/cookers/7.jpg";
import cooker8 from "../../assets/cookers/8.jpg";
import cooker9 from "../../assets/cookers/9.jpg";
import cooker10 from "../../assets/cookers/10.jpg";
import cooker11 from "../../assets/cookers/11.jpg";
import cooker12 from "../../assets/cookers/12.jpg";

import kettle1 from "../../assets/kettles/1.jpg";
import kettle2 from "../../assets/kettles/2.jpg";
import kettle3 from "../../assets/kettles/3.jpg";
import kettle4 from "../../assets/kettles/4.jpg";
import kettle5 from "../../assets/kettles/5.jpg";
import kettle6 from "../../assets/kettles/6.jpg";
import kettle7 from "../../assets/kettles/7.jpg";
import kettle8 from "../../assets/kettles/8.jpg";
import kettle9 from "../../assets/kettles/9.jpg";
import kettle10 from "../../assets/kettles/10.jpg";
import kettle11 from "../../assets/kettles/11.jpg";
import kettle12 from "../../assets/kettles/12.jpg";

import fan1 from "../../assets/fans/1.jpg";
import fan2 from "../../assets/fans/2.jpg";
import fan3 from "../../assets/fans/3.jpg";
import fan4 from "../../assets/fans/4.jpg";
import fan5 from "../../assets/fans/5.jpg";
import fan6 from "../../assets/fans/6.jpg";
import fan7 from "../../assets/fans/7.jpg";
import fan8 from "../../assets/fans/8.jpg";
import fan9 from "../../assets/fans/9.jpg";
import fan10 from "../../assets/fans/10.jpg";
import fan11 from "../../assets/fans/11.jpg";
import fan12 from "../../assets/fans/12.jpg";

import drone1 from "../../assets/drones/1.png";
import drone2 from "../../assets/drones/2.jpg";
import drone3 from "../../assets/drones/3.jpg";
import drone4 from "../../assets/drones/4.png";
import drone5 from "../../assets/drones/5.jpg";
import drone6 from "../../assets/drones/6.jpg";
import drone7 from "../../assets/drones/7.jpg";
import drone8 from "../../assets/drones/8.png";
import drone9 from "../../assets/drones/9.jpg";
import drone10 from "../../assets/drones/10.jpg";
import drone11 from "../../assets/drones/11.jpg";
import drone12 from "../../assets/drones/12.jpg";

import dryer1 from "../../assets/hair-dryers/1.jpg";
import dryer2 from "../../assets/hair-dryers/2.jpg";
import dryer3 from "../../assets/hair-dryers/3.jpg";
import dryer4 from "../../assets/hair-dryers/4.jpg";
import dryer5 from "../../assets/hair-dryers/5.jpg";
import dryer6 from "../../assets/hair-dryers/6.jpg";
import dryer7 from "../../assets/hair-dryers/7.jpg";
import dryer8 from "../../assets/hair-dryers/8.jpg";
import dryer9 from "../../assets/hair-dryers/9.jpg";
import dryer10 from "../../assets/hair-dryers/10.jpg";
import dryer11 from "../../assets/hair-dryers/11.jpg";
import dryer12 from "../../assets/hair-dryers/12.jpg";

export default function CategoryNavTab() {
  const phones = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone9,
    },

    {
      id: "10",
      category: "Games",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: phone12,
    },
  ];

  const games = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game9,
    },

    {
      id: "10",
      category: "Games",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game12,
    },
  ];

  const computers = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer9,
    },

    {
      id: "10",
      category: "computers",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: computer12,
    },
  ];

  const watches = [
    {
      id: "1",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch1,
    },

    {
      id: "2",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch2,
    },

    {
      id: "3",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch3,
    },

    {
      id: "4",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch4,
    },

    {
      id: "5",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch5,
    },

    {
      id: "6",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch6,
    },

    {
      id: "7",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch7,
    },

    {
      id: "8",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch8,
    },
    {
      id: "9",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch9,
    },

    {
      id: "10",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch10,
    },

    {
      id: "11",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch11,
    },

    {
      id: "11",
      category: "Watches",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: watch12,
    },
  ];

  const cameras = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera9,
    },

    {
      id: "10",
      category: "cameras",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: camera12,
    },
  ];

  const speakers = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker9,
    },

    {
      id: "10",
      category: "speakers",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: speaker12,
    },
  ];

  const cookers = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker9,
    },

    {
      id: "10",
      category: "cookers",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: cooker12,
    },
  ];

  const heaters = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater9,
    },

    {
      id: "10",
      category: "heaters",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: heater12,
    },
  ];

  const fans = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan9,
    },

    {
      id: "10",
      category: "fans",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: fan12,
    },
  ];

  const kettles = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle9,
    },

    {
      id: "10",
      category: "kettles",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: kettle12,
    },
  ];

  const dryers = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer9,
    },

    {
      id: "10",
      category: "dryers",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: dryer12,
    },
  ];

  const drones = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone9,
    },

    {
      id: "10",
      category: "drones",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: drone12,
    },
  ];

  const accessories = [
    {
      id: "1",
      category: "Laptop",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game1,
    },

    {
      id: "2",
      category: "Ear pod",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game2,
    },

    {
      id: "3",
      category: "Headphone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game3,
    },

    {
      id: "4",
      category: "Fridge",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game4,
    },

    {
      id: "5",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game5,
    },

    {
      id: "6",
      category: "Charger",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game6,
    },

    {
      id: "7",
      category: "Watch",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game7,
    },

    {
      id: "8",
      category: "Speaker",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game8,
    },
    {
      id: "9",
      category: "Phone",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game9,
    },

    {
      id: "10",
      category: "Games",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game10,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game11,
    },

    {
      id: "11",
      category: "Printer",
      name: "Lorem Ipsum is simply dummy ",
      priceNow: "700",
      pricePrevious: "900",
      image: game12,
    },
  ];

  const [numSelected, setNumSelected] = useState(1);
  const [products, setProducts] = useState(phones);

  const selectSmartPhones = () => {
    setNumSelected(1);
    setProducts(phones);
  };
  const selectGames = () => {
    setNumSelected(2);
    setProducts(games);
  };

  const selectComputers = () => {
    setNumSelected(3);
    setProducts(computers);
  };

  const selectWatches = () => {
    setNumSelected(4);
    setProducts(watches);
  };

  const selectCameras = () => {
    setNumSelected(5);
    setProducts(cameras);
  };

  const selectSpeakers = () => {
    setNumSelected(6);
    setProducts(speakers);
  };

  const selectRiceCookers = () => {
    setNumSelected(7);
    setProducts(cookers);
  };

  const selectHeaters = () => {
    setNumSelected(8);
    setProducts(heaters);
  };

  const selectFans = () => {
    setNumSelected(9);
    setProducts(fans);
  };

  const selectElectricKettles = () => {
    setNumSelected(11);
    setProducts(kettles);
  };

  const selectHairDryers = () => {
    setNumSelected(12);
    setProducts(dryers);
  };

  const selectDrones = () => {
    setNumSelected(14);
    setProducts(drones);
  };

  const selectAccessories = () => {
    setNumSelected(15);
    setProducts(accessories);
  };

  console.log(numSelected);

  return (
    <div className="mt-5 ">
      <div className="d-flex align-items-center  ">
        <button
          onClick={selectSmartPhones}
          type="button"
          className={numSelected === 1 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Smart Phones
        </button>
        <button
          onClick={selectGames}
          type="button"
          className={numSelected === 2 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Games
        </button>

        <button
          onClick={selectComputers}
          type="button"
          className={numSelected === 3 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Computers
        </button>

        <button
          onClick={selectWatches}
          type="button"
          className={numSelected === 4 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Watches
        </button>

        <button
          onClick={selectCameras}
          type="button"
          className={numSelected === 5 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Cameras
        </button>

        <button
          onClick={selectSpeakers}
          type="button"
          className={numSelected === 6 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Speakers
        </button>

        <button
          onClick={selectRiceCookers}
          type="button"
          className={numSelected === 7 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Rice Cookers
        </button>
        <button
          onClick={selectHeaters}
          type="button"
          className={numSelected === 8 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Heaters
        </button>

        <button
          onClick={selectFans}
          type="button"
          className={numSelected === 9 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Fans
        </button>

        <button
          onClick={selectElectricKettles}
          type="button"
          className={numSelected === 11 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Electric Kettles
        </button>

        <button
          onClick={selectHairDryers}
          type="button"
          className={numSelected === 12 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Hair Dryers
        </button>

        <button
          onClick={selectDrones}
          type="button"
          className={numSelected === 14 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Drones
        </button>

        <button
          onClick={selectAccessories}
          type="button"
          className={numSelected === 15 ? "btn outline_button_selected rounded-0 bg_orange" : "btn outline_button rounded-0"}>
          Accessories
        </button>
      </div>
      <hr className="my-0 mb-4 mt-2" />
      <div className="row d-flex">
        {products &&
          products.map((product: any, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 ">
              <div className="recant_product_card mb-4 gap-2 pb-3">
                <Image
                  className=" no_selection cp"
                  src={product.image}
                  objectFit="scale-down"
                  alt="img"
                  height={200}
                  width={200}
                />
                <small className="text-muted">---------- {product.category} ----------</small>
                <p className="h6 mb-0 ">{product.name}</p>
                <p className="h5 ">
                  <span className="color_orange">NRS{product.priceNow}</span> <span className="text-muted">NRS{product.pricePrevious}</span>
                </p>
                <div className="d-flex align-items-center text-muted gap-4">
                  <IoIosGitCompare
                    size={25}
                    className="cp"
                  />
                  <AiOutlineHeart
                    size={25}
                    className="cp"
                  />
                  <AiOutlineShoppingCart
                    size={25}
                    className="cp"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
