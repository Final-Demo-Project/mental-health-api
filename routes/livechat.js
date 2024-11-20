import { Router } from "express";
import { getChats, startChat } from "../controllers/livechat.js";


const chatRouter = Router();


chatRouter.post("/chat", startChat);

chatRouter.get("/chat", getChats);


export default chatRouter;
