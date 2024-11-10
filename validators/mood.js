import Joi from "joi";

export const logMoodValidator = Joi.object({
   mood: Joi.string().required(),
   date: Joi.date().required()
})