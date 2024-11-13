import Router from "express";
import { addEducational, deleteEducational, getAllEducationals, getEducationalById, updateEducational } from "../controllers/educational.js";
import { educationalCoverUpload } from "../middlewares/upload.js"; 
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";



// create a Router
const educationalRouter = Router();

// Define routes
educationalRouter.post("/educationals", educationalCoverUpload.single("cover"), addEducational);

educationalRouter.get("/educationals", getAllEducationals);

educationalRouter.get("/educationals/:id", getEducationalById);

educationalRouter.patch("/educationals/:id", educationalCoverUpload.single("cover"), updateEducational);

educationalRouter.delete("/educationals/:id", deleteEducational);


export default educationalRouter;