const express = require('express');
const clienteController = require('../controller/cliente.controller');

const routes = express.Router();

routes.post("/cadastro", clienteController.cadastro);
routes.get("/consultar", clienteController.consulta);
routes.get("/consultar/:id([0-9]+)", clienteController.consultaPorID);
routes.delete("/deletar/:id([0-9]+)", clienteController.deletar);
routes.put("/atualizar", clienteController.atualizar);

module.exports = routes;