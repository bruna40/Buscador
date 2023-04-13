import express from "express";
import ProdutosController from "../controllers/produtosController.js";

const router = express.Router();

router
    .get("/produtos", ProdutosController.getAllProducts)
    .get("/produtos/:id", ProdutosController.getProductById)
    .get("/produtos/busca", ProdutosController.getProductByCategory)
    .post("/produtos", ProdutosController.createProduct)
    .put("/produtos/:id", ProdutosController.updateProduct)
    .delete("/produtos/:id", ProdutosController.deleteProduct);

export default router;