import { MoodModel } from "../models/assessment.js";


// Log Mood
export const logMood = async (req, res) => {
    const mood = new Mood({ user: req.user.id, mood: req.body.mood });
    await mood.save();
    res.status(201).json(mood);
 };