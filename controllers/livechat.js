import { ChatModel } from "../models/livechat.js";
import { chatValidator } from "../validators/livechat.js";

export const startChat = async (req, res, next) => {
    try {
        const {error, value} = chatValidator.validate({
            ...req.body
        });
        if(error) {
           return res.status(422).json(error); 
        }
        await ChatModel.create({
            ...value
        });
        res.status(201).json("Chat started");
    } catch (error) {
        next(error)
        
    }
   
}

export const getChats = async (req, res, next) => {
    try {
        const chats = await ChatModel.find(JSON.parse);
        res.status(200).json(chats)
        
    } catch (error) {
        next(error);
        
    }
}