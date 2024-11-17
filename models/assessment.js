import { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const assessmentSchema = new Schema({
    user: { type: Types.ObjectId, ref: 'User' },
    type: { type: String, required: true }, // e.g., "PHQ-9"
    score: { type: Number, required: true }, // Total score of the quiz
    responses: {
        anhedonia: { type: Number, required: true },
        depressedMood: { type: Number, required: true },
        sleepIssues: { type: Number, required: true },
        fatigue: { type: Number, required: true },
        appetite: { type: Number, required: true },
        selfFailure: { type: Number, required: true },
        concentration: { type: Number, required: true },
        movement: { type: Number, required: true },
        suicidalThoughts: { type: Number, required: true },
    }, // Array of answers to individual quiz questions
    severity: {type: String, enum: ["Minimal Depression", "Mild Depression", "Moderate Depression", "Moderately Severe Depression", "Severe Depression"],
        required: true,}, // Calculated severity level
    date: { type: Date, default: Date.now }
}, {
    timestamps: true
});

assessmentSchema.plugin(toJSON);

export const AssesmentModel = model("Assessment", assessmentSchema);