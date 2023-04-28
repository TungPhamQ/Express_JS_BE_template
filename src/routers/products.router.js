import { Router } from "express";
import {
  getListProduct,
  createNewProduct,
  editProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
const router = Router();

router.get("/", getListProduct);
router.post("/", createNewProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

export default router;
