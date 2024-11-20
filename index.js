import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Server } from "socket.io";
import http from "http"
import userRouter from "./routes/users.js";
import moodRouter from "./routes/moods.js";
import educationalRouter from "./routes/educational.js";
import assessmentRouter from "./routes/assessment.js";
import chatRouter from "./routes/livechat.js";



// Create an express app
const app = express();


// Connect to database
await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.log("Error connecting to database", error));

// // create an http server using express app
// const server = http.createServer(app);


// // attach socket.oi to the http server
// const io = new Server(server);


// // listen for client connections
// io.on('connection', (socket) => {
//         console.log('A user connected:', socket.id);

// //  Listen for messages
//     socket.on('chats', async (data) => {
//         const { value } = data;

//         // Save to MongoDB
//         const chat = await ChatModel.create({value });

//         // Broadcast the message to all clients
//         io.emit('chats', chat);
//     });

//     socket.on('disconnect', () => {
//         console.log('A user disconnected');
//     });       

// });



// Use Middlewares
app.use(express.json());
app.use(cors());


// Use routes
app.use(userRouter);
app.use(moodRouter);
app.use(educationalRouter);
app.use(assessmentRouter);
app.use(chatRouter)


// Listen for incoming requests
app.listen(7070, () => {
    console.log("App is listening on port 7070")
});