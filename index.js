import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/users.js";
import moodRouter from "./routes/moods.js";
import educationalRouter from "./routes/educational.js";
import assessmentRouter from "./routes/assessment.js";



// Connect to database
await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.log("Error connecting to database", error));





// Create an express app
const app = express();


// Use Middlewares
app.use(express.json());
app.use(cors());


// Use routes
app.use(userRouter, moodRouter, educationalRouter)


// Listen for incoming requests
app.listen(7070, () => {
    console.log("App is listening on port 7070")
});