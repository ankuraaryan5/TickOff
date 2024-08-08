import ErrorHandler from "../error/error.js";
import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";

export const LoginController = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please provide all fields", 400));
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorHandler("Invalid credentials", 401));
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return next(new ErrorHandler("Invalid credentials", 401));
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const ValidationError = Object.values(error.errors).map(val => val.message);
            return next(new ErrorHandler(ValidationError.join(" & "), 400));
        }
        return next(new ErrorHandler(error.message || "Internal Server Error", 500));
    }
}