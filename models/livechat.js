import {Schema, model} from "mongoose";

const chatSchema = new Schema({
    conversationId: {type: String, required: true},
    sender: {type: String, required: true},
    text: {type: String, required: true}
},{
    timestamps: true 
});


export const ChatModel = model("Chat", chatSchema)