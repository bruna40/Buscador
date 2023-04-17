import produtos from "../models/Produto.js";

class ProdutosService {
    static async getAll() {
        return await produtos.find();
    }

    static async getById(id) {
        return await produtos.findById(id);
    }

    static async getByCategory(category) {
        return await produtos.find({ "category": category });
    }

    static async create(product) {
        return await produtos.create(product);
    }

    static async update(id, product) {
        return await produtos.findByIdAndUpdate(id, product);
    }

    static async delete(id) {
        return await produtos.findByIdAndDelete(id);
    }
}

export default ProdutosService;