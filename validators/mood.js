import Joi from "joi";

export const logMoodValidator = Joi.object({
   user: Joi.string().required(),
   mood: Joi.string().required(),
   date: Joi.date().required()
})