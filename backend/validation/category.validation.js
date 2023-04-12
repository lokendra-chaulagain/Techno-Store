import Joi from "joi";

const category = Joi.object().keys({
  name: Joi.string().min(3).max(20).required(),
  // images: Joi.array().required()
});

export default category;
