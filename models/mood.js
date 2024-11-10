import { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json"; 


export const moodSchema = new Schema({
    user: { type: Types.ObjectId, ref: 'User' },
    mood: String, // e.g., "happy", "sad", etc.
    date: { type: Date, default: Date.now }
}, {
    timestamps: true
});

moodSchema.plugin(toJSON)


export const MoodModel = model("Mood", moodSchema);