import Joi from "joi";

export const chatValidator = Joi.object({
    conversationId: Joi.string().required(),
    sender: Joi.string().required(),
    text: Joi.string().required()
    
})
