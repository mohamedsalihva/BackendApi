import express from "express";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import isAdmin from "../middlewares/isAdmin.js";

import {
  createProductController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
  deleteProductController
} from "../controllers/ProductController.js";

const router = express.Router();


router.get("/", getAllProductsController);
router.get("/:id", getSingleProductController);


router.post("/", AuthMiddleware, isAdmin, createProductController);
router.put("/:id", AuthMiddleware, isAdmin, updateProductController);
router.delete("/:id", AuthMiddleware, isAdmin, deleteProductController);

export default router;
