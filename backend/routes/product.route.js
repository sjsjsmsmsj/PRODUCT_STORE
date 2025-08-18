import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Product } from '../models/product.model.js'
import { getProducts, postProducts, deleteProducts, putProducts } from "../controller/product.controller.js";

dotenv.config();

const router = express.Router();


router.post('/', postProducts)

router.delete('/:id', deleteProducts)

router.get('/', getProducts)

router.put('/:id', putProducts)

export default router