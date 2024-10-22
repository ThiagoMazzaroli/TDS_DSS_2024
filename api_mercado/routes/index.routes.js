const routes = require("express").Router();
const clienteRouter = require("./cliente.router");
const produtoRouter = require("./produto.router");
const pedidoRouter = require("./pedido.router");

routes.use("/cliente", clienteRouter);
routes.use("/produto", produtoRouter);
routes.use("/pedido", pedidoRouter);

module.exports = routes;