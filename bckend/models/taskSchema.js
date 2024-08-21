import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String},
    date: { type: String, required: true },
    time: { type: String, required: true }, 
    visibility: { type: String, required: true },
    createdBy: { type: String, required: true },
    completed: { type: Boolean, default: false },
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema)
export default Task