import { createData, deletebooks, getAllbooks, updatebooks } from "../controllers/bookstore.controller.js";
import { Router } from "express";

export const bookstoreRouter = Router();

bookstoreRouter.post('/',createData);

bookstoreRouter.get('/',getAllbooks);

bookstoreRouter.delete('/:id',deletebooks);

bookstoreRouter.put('/:id',updatebooks)