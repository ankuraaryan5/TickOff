import express from "express";
import { SignupController } from "../controller/signup.js";
import { LoginController } from "../controller/login.js";

const router = express.Router();

router.post("/signup", SignupController);
router.post("/login", LoginController);

export default router;
