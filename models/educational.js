import { Schema, Types, model } from "mongoose";

const educationalSchema = new Schema({
    title : {
        type: String,
        required: true
    },

    cover : {
        type: String
    },

    author : {
        type: String,
        required: true
    },

    date : {
        type: String,
        required: true
    },

    category : {
        type: String,
        required: true
    },

    content : {
        type: String,
        required: true
    },

})

export const EducationalModel = model("Book", educationalSchema);