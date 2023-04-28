import { Router } from "express";
import {
  getListProduct,
  createNewProduct,
  editProduct,
  deleteProduct,
  getProduct,
} from "../controllers/products.controller.js";
const router = Router();

router.get("/", getListProduct);
router.get("/:id", getProduct);
router.post("/", createNewProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

export default router;
