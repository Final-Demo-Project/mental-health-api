import Joi from "joi";

export const registerUserValidator = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().valid("user", "counselor"),
  phone: Joi.string().required()
});

export const loginUserValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const updateProfileValidator = Joi.object({
    fullName: Joi.string(),
    // : Joi.string(),
    // lastName: Joi.string()
});