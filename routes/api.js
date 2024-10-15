import express from "express";
import { createProduct, deleteProductById, getProductById, listAllProducts, updateProductById } from "../controllers/product.controller.js";

const router = express.Router();

router.post('/product', createProduct)
router.get('/product', listAllProducts)
router.get('/product/:id', getProductById)
router.delete('/product/:id', deleteProductById)
router.patch('/product/:id', updateProductById)

export default router;