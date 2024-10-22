const routes = require("express").Router();
const clienteController = require("../controller/cliente.controller");

// CRUD
routes.post("/", clienteController.cadastro);
routes.get("/", clienteController.consultar);
routes.get("/:id([0-9]+)", clienteController.buscaPorId);
routes.put("/", clienteController.atualizar);
routes.delete("/:id([0-9]+)", clienteController.deletar);

module.exports = routes;