import express from "express";
import { SignupController } from "../controller/signup.js";
import { LoginController } from "../controller/login.js";
// import { LogoutController } from "../controller/login.js";
import { createTask } from "../controller/createTask.js";
import authenticate from "../middlewares/authenticate.js";
import { accessTask } from "../controller/accessTask.js";



const router = express.Router();

router.post("/signup", SignupController);
router.post("/login", LoginController);
// router.post("/logout", LoginController);
router.post("/createTask", authenticate, createTask);
router.get("/getAllTask", accessTask);

export default router;
