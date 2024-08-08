import Task from "../models/taskSchema.js";
import ErrorHandler from "../error/error.js";

export const createTask = async (req, res, next) => {
  const { name, description, time } = req.body;

  if (!name || !time) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  try {
    const task = await Task.create({
      name,
      description,
      time,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const ValidationError = Object.values(error.errors).map(val => val.message);
      return next(new ErrorHandler(ValidationError.join(" & "), 400));
    }
    return next(new ErrorHandler(error.message || "Internal Server Error", 500));
  }
};
