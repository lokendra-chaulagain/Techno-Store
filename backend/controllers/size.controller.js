import Size from "../models/Size.js";
import createError from "../utils/error.js";

const createSize = async (req, res, next) => {
  try {
    const newService = new Size(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Size !"));
  }
};

const updateSize = async (req, res, next) => {
  try {
    const updatedService = await Size.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Size !"));
  }
};

const deleteSize = async (req, res, next) => {
  try {
    const deletedService = await Size.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Size !"));
  }
};

const getSizeById = async (req, res, next) => {
  try {
    const singleService = await Size.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Size by Id !"));
  }
};

const getAllSize = async (req, res, next) => {
  try {
    const allService = await Size.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Size !"));
  }
};

export { createSize, updateSize, deleteSize, getSizeById, getAllSize };
