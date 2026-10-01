import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, updateProduct } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get('/',getAllProduct);

productRouter.post('/',createProduct);

productRouter.delete('/:id',deleteProduct);

productRouter.patch('/:id',updateProduct);

export default productRouter;