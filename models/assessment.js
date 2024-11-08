import { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const assessmentSchema = new Schema ({
    user: { type: Types.ObjectId, ref: "User" },
   type: {type: String}, // e.g., "PHQ-9"
   score: { type: Number},
   responses: [Number],
   date: { type: Date, default: Date.now }
}, {
    timestamps: true
});

assessmentSchema.plugin(toJSON);

export const AssessmentModel = model("Assessment", assessmentSchema);