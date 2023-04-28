//import controllers
//import mid
//router.get("/products",getAll )
//router.post("/products/create",auth,post)
//router.put("/products"controller)
//router.delete("/products"controller)

import { Router } from "express";
const router = Router();

import products from "./products.router.js";

router.use("/products", products);

export default router;
