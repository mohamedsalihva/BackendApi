import express from "express";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import isAdmin from "../middlewares/isAdmin.js";


import  {getAllUsersController, deleteUsersController, updateUsersController} from  "../controllers/AdminController.js"


 const router = express.Router();

router.get("/user", AuthMiddleware, isAdmin, getAllUsersController);
router.delete("/user/:id", AuthMiddleware, isAdmin, deleteUsersController);
router.put("/user/:id", AuthMiddleware, isAdmin, updateUsersController);

export default router;