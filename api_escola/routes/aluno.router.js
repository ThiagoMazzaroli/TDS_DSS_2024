const express = require("express");
const alunoController = require("../controller/aluno.controller");

const routes = express.Router();

//CRUD
routes.post("/", alunoController.cadastrar);
routes.get("/", alunoController.consultar);
routes.get("/:ra([0-9]+)", alunoController.buscaPorRa);
routes.put("/", alunoController.atualizar);
routes.delete("/:ra([0-9]+)", alunoController.deletar);

module.exports = routes;