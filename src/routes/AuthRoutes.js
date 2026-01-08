import express from "express";
const router = express.Router();


import { signupController, loginController } from '../controllers/Authcontroller.js';




router.post("/signup", signupController);
router.post("/login", loginController);


export default router;
