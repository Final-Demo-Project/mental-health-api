import { Schema, Types, model } from "mongoose";

const educationalSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    cover: {
        type: String
    },

    author: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ["Anxiety Management", "Stress Management", "Depression Management", "Mood Disorder", "Trauma and Recovery", "kitchen"],
        required: true
    
    },

    content: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

export const EducationalModel = model("Educational", educationalSchema);