import { Router } from "express";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";

// create a router
const moodRouter = Router();

// Define Routes
moodRouter.post("/moods", logMood);

moodRouter.get("/moods", getMoods);

moodRouter.get("/moods/:date", getMoodByDate);

export default moodRouter;