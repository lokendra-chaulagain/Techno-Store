import Product from "../models/Product.js";
import createError from "../utils/error.js";
import slugify from "slugify";
import Category from "../models/Category.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createProduct = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
      url: slugify(req.body.name, "-"),
    };
    console.log(req.body);
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }

    const newService = new Product(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Product !"));
  }
};

const updateProduct = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }

    const updatedService = await Product.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Product !"));
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const deletedService = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Product !"));
  }
};

const getProductById = async (req, res, next) => {
  try {
    const singleService = await Product.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Product by Id !"));
  }
};

const getAllProduct = async (req, res, next) => {
  try {
    const q = req.query.q;

    const keys = ["name"];
    let allService = [];
    if (req.query.search) {
      let name = new RegExp(q, "i");
      allService = await Product.find({ name: name, description: q });
      return res.status(200).json(allService);
    }

    let featuredProducts = [];
    let topSellingProducts = [];

    if (req.query.featured) {
      featuredProducts = await Product.find({ featured: req.query.featured });
      res.status(200).json(featuredProducts.slice(0, 9));
    } else if (req.query.category) {
      allService = await Product.find({ category: req.query.category });
    } else if (req.query.topSelling) {
      topSellingProducts = await Product.find({ topSelling: req.query.topSelling });
      res.status(200).json(topSellingProducts.slice(0, 9));
    } else if (req.query.url) {
      allService = await Product.find({ url: req.query.url });
    } else if (req.query.slug) {
      let cat = await Category.findOne({ url: `${req.query.slug}` });
      allService = await Product.find({ category: cat._id });
    } else if (req.query.id && req.query.color && req.query.size) {
      allService = await Product.find({ $and: [{ category: req.query.id }, { color: req.query.color }, { size: req.query.size }] });
    } else {
      allService = await Product.find();
    }
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Product !"));
  }
};

const getAllProductForAdmin = async (req, res, next) => {
  const search = req.query.search || "";
  const sort = req.query.sort || "";

  const query = {
    name: { $regex: search, $options: "i" },
  };

  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 8;
    const skip = (page - 1) * size;

    const totalProductCount = await Product.countDocuments();
    const products = await Product.find(query)
      .skip(skip)
      .limit(size)
      .sort({ createdAt: sort == "latest" ? -1 : 1 });

    res.status(200).json({
      products,
      totalProductCount,
      page,
      size,
    });
  } catch (error) {
    console.log(error);
    return next(createError(500, "Server Error while getting all products"));
  }
};

const getAllProductFrontend = async (req, res, next) => {
  const search = req.query.search || "";
  const sort = req.query.sort || "";
  const category = req.query.category || "";

  // const query = {
  //   name: { $regex: search, $options: "i" },
  // };

  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 5;
    const skip = (page - 1) * size;

    const totalProductCount = await Product.countDocuments();
    // const allProduct = await Product.find(query)
    const allProduct = await Product.find({ category: category }) 
      .skip(skip)
      .limit(size)
      .sort({ createdAt: sort == "latest" ? -1 : 1 });
    res.status(200).json({
      totalProductCount,
      allProduct,
    });
  } catch (error) {
    return next(createError(500, "Server Error while getting all product !!!"));
  }
};

export { createProduct, updateProduct, deleteProduct, getProductById, getAllProduct, getAllProductForAdmin, getAllProductFrontend };
