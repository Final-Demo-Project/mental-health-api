import Router from "express";
import { addEducational, deleteEducational, getAllEducationals, getEducationalById, updateEducational } from "../controllers/educational.js";
import { educationalmediaUpload } from "../middlewares/upload.js"; 
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";



// create a Router
const educationalRouter = Router();

// Define routes
educationalRouter.post("/educationals", isAuthenticated, hasPermission("add_educational"), educationalmediaUpload.single("media"), addEducational);

educationalRouter.get("/educationals", getAllEducationals);

educationalRouter.get("/educationals/:id", getEducationalById);

educationalRouter.patch("/educationals/:id", isAuthenticated, hasPermission("update_educational"), educationalmediaUpload.single("media"), updateEducational);

educationalRouter.delete("/educationals/:id", deleteEducational);


export default educationalRouter;