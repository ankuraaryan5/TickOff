import Task from "../models/taskSchema.js";
import ErrorHandler from "../error/error.js";
export const accessTask = async (req, res, next) => {
    
    try {
        const task = await Task.find();
        if (!task) {
            return next(new ErrorHandler("Task not found", 404));
        }

        res.status(200).json({
            success: true,
            task,
               
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
}