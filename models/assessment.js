import { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const assessmentSchema = new Schema({
    user: { type: Types.ObjectId, ref: 'User' },
   type: String, // e.g., "PHQ-9"
   score: Number, // Total score of the quiz
   responses: [Number], // Array of answers to individual quiz questions
   date: { type: Date, default: Date.now }
}, {
    timestamps: true
});

assessmentSchema.plugin(toJSON);

export const AssesmentModel = model("Assessment", assessmentSchema);