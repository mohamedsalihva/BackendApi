import {
  createProductService,
  getAllProductService,
  getSingleProductService,
  updateProductService,
  deleteProductService
} from "../services/ProductService.js";

export const createProductController = async (req, res) => {
  const product = await createProductService({
    ...req.body,
    createdBy: req.user._id
  });

  res.status(201).json({
    success: true,
    data: product,
    message: "Product created successfully"
  });
};

export const getAllProductsController = async (req, res) => {
  const products = await getAllProductService();
  res.status(200).json({
    success: true,
    data: products,
    message: "Products retrieved successfully"
  });
};

export const getSingleProductController = async (req, res) => {
  const product = await getSingleProductService(req.params.id);
  res.status(200).json({
    success: true,
    data: product,
    message: "Product retrieved successfully"
  });
};

export const updateProductController = async (req, res) => {
  const product = await updateProductService(req.params.id, req.body);
  res.status(200).json({
    success: true,
    data: product,
    message: "Product updated successfully"
  });
};

export const deleteProductController = async (req, res) => {
  await deleteProductService(req.params.id);
  res.status(200).json({
    success: true,
    message: "Product deleted successfully"
  });
};
