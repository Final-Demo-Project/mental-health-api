import Joi from "joi";

export const addEducationaltValidator = Joi.object({
    title: Joi.string().required(),
    cover: Joi.string().required(),
    author: Joi.string().required(),
    date: Joi.string().required(),
    category: Joi.string().required(),
    content: Joi.string().required()
});

export const updateEducationalValidator = Joi.object({
    title: Joi.string(),
    cover: Joi.string(),
    content: Joi.string(),
    category: Joi.string()
});