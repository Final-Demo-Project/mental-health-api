import { MoodModel } from "../models/mood.js";
import { logMoodValidator } from "../validators/mood.js";


// Log Mood
export const logMood = async (req, res, next) => {
    
   try {
    // Validate user input
    const { error, value } = logMoodValidator.validate({
        ...req.body});

    if (error) {
        return res.status(422).json(error);
    }
    // write mood to database
    await MoodModel.create(value);
    //  const mood = new MoodModel({ user: req.user.id, mood: req.body.mood });

    // Response to resquest 
     res.status(201).json("Mood logged")
   } catch (error) {
    next(error)
    
   };
 };

 export const getMoods = async (req, res, next) => {
    try {
      const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;
      // Fetch moods from database
      const moods = await MoodModel
        .find(JSON.parse(filter))
        .sort(JSON.parse(sort))
        .limit(limit)
        .skip(skip);
      // Return response
      res.status(200).json(moods);
    } catch (error) {
      next(error);
    }
  };

  export const getMoodByDate = async (req, res, next) => {
    try {
      const date = req.params;
      // get todo by id from dtabase
      const mood = await MoodModel.findByDate(date);
      // respond to request
      res.json(mood);
    } catch (error) {
     next(error); 
    }
   
   }