import Joi from "joi";

export const takeAssessmentValidator = Joi.object({
   response: Joi.string().required(),
   date: Joi.date().required()
})