import Category from "../models/Category.js";
import createError from "../utils/error.js";

import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with  credentials
cloudinary.config({
  cloud_name: "dyof6o0ul",
  api_key: "943579715357941",
  api_secret: "fFY3ZIIZAsSKF5lJw9CDVYHmpLQ",
});

// const createCategory = async (req, res, next) => {
//   try {
//     const newService = new Category(req.body);
//     const savedService = await newService.save();
//     res.status(200).json(savedService);
//   } catch (error) {
//     return next(createError(500, "Something went wrong"));
//   }
// };

const createCategory = async (req, res, next) => {
  try {
    const images = [];
    const files = req.files;

    for (const file of files) {
      // const result = await cloudinary.uploader.upload(file.path, { folder: "brocade-uploads/banners" });
      // const currentDateTime = new Date().toISOString().replace(/[-:.]/g, ""); // Get current date and time
      // const publicId = `techno-uploads/banners/${currentDateTime}_${file.originalname}`; // Create unique public_id
      // const result = await cloudinary.uploader.upload(file.path, { public_id: publicId });
      // images.push(result.secure_url);
      const currentDateTime = new Date().toISOString().replace(/[-:.]/g, ""); // Get current date and time
      const originalnameWithoutExtension = file.originalname.split(".").slice(0, -1).join("."); // Remove file extension
      const publicId = `techno-uploads/category/${currentDateTime}_${originalnameWithoutExtension}`; // Create unique public_id without duplicate file extension
      const result = await cloudinary.uploader.upload(file.path, { public_id: publicId });
      images.push(result.secure_url);
    }

    // save to database
    const newService = new Category({ name: req.body.name, images: images });
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const updatedService = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const deletedService = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const singleService = await Category.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "SSomething went wrong"));
  }
};

// const getAllCategory = async (req, res, next) => {
//   try {
//     const allService = await Category.find();
//     res.status(200).json(allService);
//   } catch (error) {
//     return next(createError(500, "Server Error while getting all Category !"));
//   }
// };

const getAllCategory = async (req, res, next) => {
  try {
    let allService = [];
    if (req.query.url) {
      allService = await Category.findOne({ url: req.query.url });
    } else {
      allService = await Category.find();
    }
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

export { createCategory, updateCategory, deleteCategory, getCategoryById, getAllCategory };
