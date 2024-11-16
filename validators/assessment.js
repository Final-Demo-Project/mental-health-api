import Joi from "joi";

export const takeAssessmentValidator = Joi.object({
   responses: Joi.object().required(),
   date: Joi.date().required(),
   score: Joi.number().required()
})