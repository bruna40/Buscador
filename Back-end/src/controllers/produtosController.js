import produtos from "../models/Produto.js";
import ProdutosService from "../service/produtosService.js";

class ProdutosController {
    static async getAllProducts(_req, res, next) {
        try {
            const productResult = await ProdutosService.getAll();
            res.status(200).send(productResult);
        } catch(err) {
            next(err);
        }
    }

    static async getProductById(req, res, next) {
        const { id } = req.params;
        try {
            const productResult = await ProdutosService.getById(id);
            if(!productResult) {
                res.status(404).send({ message: "Id do produto não encontrado" });
            }
            res.status(200).send(productResult);
        } catch(err) {
            next(err);
        }
    }

    static async getProductByCategory(req, res, next) {
        const { category } = req.query;
        try {
            const productResult = await ProdutosService.getByCategory(category);
            res.status(200).send(productResult);
        } catch(err) {
            next(err);
        }
    }

    static async createProduct(req, res, next) {
        const produto = new produtos(req.body);
        try {
            const productResult = await ProdutosService.create(produto);
            res.status(201).send(productResult);
        } catch(err) {
            next(err);
        }
    }

    static async updateProduct(req, res, next) {
        const produto = req.body;
        const { id } = req.params;
        try {
            const productResult = await ProdutosService.update(id, produto);
            res.status(200).send(productResult);
        } catch(err) {
            next(err);
        }
    }

    static async deleteProduct(req, res, next) {
        const { id } = req.params;
        try {
            const productResult = await ProdutosService.delete(id);
            res.status(200).send(productResult);
        } catch(err) {
            next(err);
        }
    }


}

export default ProdutosController;