import { AssesmentModel } from "../models/assessment.js";
import { takeAssessmentValidator } from "../validators/assessment.js";

// Log Mood
export const takeAssessment = async (req, res, next) => {
    
    try {
     // Validate user input
     const { error, value } = takeAssessmentValidator.validate({
         ...req.body});
 
     if (error) {
         return res.status(422).json(error);
     }
     // write assesstment to database
     await AssesmentModel.create({
      ...value,
      // client: req.auth.id
    });
     // Response to resquest 
      res.status(201).json("Assessment taken")
    } catch (error) {
     next(error)
     
    };
  };
 
  export const getAllAssessments = async (req, res, next) => {
     try {
       const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;
       // Fetch assesstments from database
       const assessments = await AssesmentModel
         .find(JSON.parse(filter))
         .sort(JSON.parse(sort))
         .limit(limit)
         .skip(skip);
       // Return response
       res.status(200).json(assessments);
     } catch (error) {
       next(error);
     }
   };
 
   export const getAssessmentResult = async (req, res, next) => {
     try {
       const {result} = req.params;
       // get todo by id from dtabase
       const assessment = await AssesmentModel.findByResult(result);
       // respond to request
       res.json(assessment);
     } catch (error) {
      next(error); 
     }
    
    }