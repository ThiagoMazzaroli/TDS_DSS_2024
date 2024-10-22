const express = require("express");
const turmaController = require("../controller/turma.controller");

const routes = express.Router();

//CRUD
routes.post("/", turmaController.cadastrar);
routes.get("/", turmaController.consultar);
routes.put("/", turmaController.atualizar);
routes.delete("/", turmaController.deletar)

module.exports = routes;