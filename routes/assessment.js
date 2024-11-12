import { Router } from "express";
import { getAllAssessments, getAssessmentResult, takeAssessment } from "../controllers/assessment.js";


// Create a router
const assessmentRouter = Router();

// Define router
assessmentRouter.post("/assessments", takeAssessment);

assessmentRouter.get("/assessments", getAllAssessments);

assessmentRouter.get("/assessments/:result", getAssessmentResult);


export default assessmentRouter;