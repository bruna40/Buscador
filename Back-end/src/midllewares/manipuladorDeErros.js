import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros (erro, _req, res, next) {
    
    if( erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos" });
    }
    res.status(500).send({ message: "Erro interno no servidor" });

}


export default manipuladorDeErros;