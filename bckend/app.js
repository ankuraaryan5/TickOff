import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { errorMiddleware } from "./error/error.js";
import router from "./routes/authRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });
app.use(cors(
    {
        origin:process.env.FRONTEND_URL,
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    }
));
app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", router);

app.use(errorMiddleware);

connectDB();

export default app;
