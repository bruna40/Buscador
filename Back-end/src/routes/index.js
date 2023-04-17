import express from "express";
import produtos from "./produtosRoute.js";

const routes = (app) => {
    app.route("/").get((_req, res) => {
        res.status(200).send("Seja bem vindo a API de produtos");
    });
    app.use(
        express.json(),
        produtos,
    );
};

export default routes;