import ErrorHandler from "../error/error.js";
import User from "../models/userSchema.js";

export const SignupController = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  try {
    await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    error.message = error.message || "Internal Server Error";
    if (error.name === "ValidationError") {
      const ValidationError = Object.values(error.errors).map(
        (val) => val.message
      );
      return next(new ErrorHandler(ValidationError.join(" & "), 400));
    }
    return next(error);
  }
};
