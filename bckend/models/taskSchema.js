import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    time: { type: String, required: true }, 
    visiblity: { type: String, required: true },
    createdBy: { type: String, required: true },
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema)
export default Task