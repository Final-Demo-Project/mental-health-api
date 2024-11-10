import { EducationalModel } from "../models/educational.js";
import { addEducationaltValidator, updateEducationalValidator } from "../validators/educational.js";

export const addEducational = async (req, res, next) => {


  try {
    // Validate input
    const { error, value } = addEducationaltValidator.validate({
      ...req.body,
      media: req.file?.filename
    });
    if (error) {
      return res.status(422).json(error);
    }
    // Write to database
    await EducationalModel.create({
      ...value,
      user: req.auth.id
    });
    // Response to request
    res.status(201).json("Educational was added");
  } catch (error) {
    next(error);

  }
}

export const getAllEducationals = async (req, res, next) => {

  try {
    const { filter = "{}", sort = "{}", limit = 15, skip = 0 } = req.query;
    // Fetch educationals from database
    const educationals = await EducationalModel
      .find(JSON.parse(filter))
      .sort(JSON.parse(sort))
      .limit(limit)
      .skip(skip);
    // Return Response
    res.status(200).json(educationals);
  } catch (error) {
    next(error);

  }
}

export const countEducationals = async (req, res, next) => {
  try {
      const { filter = "{}" } = req.query;
      // Count adverts in database 
      const count = await EducationalModel.countdocuments(JSON.parse(filter));
      // Respond to request
      res.json({ count });
  } catch (error) {
      next(error);
  }
}


export const getEducationalById = async (req, res, next) => {


  try {
    // Fetch a book for database
    const book = await EducationalModel.findById(req.params.id).populate("author");
    // Return Response
    res.status(200).json(book);
  } catch (error) {
    next(error);

  }
}

export const updateEducational = async (req, res, next) => {
  try {
      const { error, value } = updateEducationalValidator.validate({
          ...req.body,
          media: req.file?.filename
      });
      if (error) {
          return res.status(422).json(error);
      }
      console.log(req.params, req.auth);
      const educational = await EducationalModel.findOneAndUpdate(
          {
              _id: req.params.id,
              user: req.auth.id
          },
          value, { new: true });
      if (!educational) {
          return res.status(404).json("Educational not found!");
      }
      res.status(200).json("Educational updated!");
  } catch (error) {
      next(error);
  }
}

export const deleteEducational = async (req, res, next) => {
  try {
      const educational = await EducationalModel.findOneAndDelete(
          {
              _id: req.params.id,
              user: req.auth.id
          }
      );
      if (!educational) {
          return res.status(404).json("Educational not found!");
      }
      res.status(200).json("Educational deleted.");
  } catch (error) {
      next(error);
  }
}