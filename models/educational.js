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
        type: Types.ObjectId,
        ref: "Author",
        required: true
    },

    date : {
        type: Date, default: Date.now,
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