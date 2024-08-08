import ErrorHandler from "../error/error.js";
import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";

export const SignupController = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }
  
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
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
