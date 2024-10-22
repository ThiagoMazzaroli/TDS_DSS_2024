const express = require("express");
const alunoRouter = require("./aluno.router");
const professorRouter = require("./professor.router");
const turmaRouter = require("./turma.router");

const routes = express.Router();

routes.use("/aluno", alunoRouter);
routes.use("/professor", professorRouter);
routes.use("/turmas", turmaRouter);

module.exports = routes;