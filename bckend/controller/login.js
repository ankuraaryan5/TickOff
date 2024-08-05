import ErrorHandler from "../error/error.js";
import User from "../models/userSchema.js";

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
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const ValidationError = Object.values(error.errors).map(val => val.message);
            return next(new ErrorHandler(ValidationError.join(" & "), 400));
        }
        return next(new ErrorHandler(error.message || "Internal Server Error", 500));
    }
}