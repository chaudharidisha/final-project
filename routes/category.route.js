import { Router } from "express";
import { createCatgory, deleteCategory, getAllCategory, updateCategory } from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.get('/',getAllCategory);

categoryRouter.post('/',createCatgory);

categoryRouter.delete('/:id',deleteCategory);

categoryRouter.patch('/:id',updateCategory);

export default categoryRouter;