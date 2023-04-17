import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: { type: String },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    link: { type: String, required: true },

});

const Produtos = mongoose.model("produtos", produtoSchema);

export default Produtos;