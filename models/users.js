import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    avatar: {type: String},
    role: { type: String, default: "user", enum: ["user", "counselor"] }
    // moodlogs: [{ type: Schema.Types.ObjectId, ref: "Mood" }],
    // assessments: [{ type: Schema.Types.ObjectId, ref: "Assessment" }],
    
},
    {
        timestamps: true,
    });

userSchema.plugin(toJSON);


export const UserModel = model("User", userSchema);

