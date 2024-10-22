const express = require('express');
const clienteRouter = require('./cliente.router');

const routes = express.Router();

routes.use("/clientes", clienteRouter);

module.exports = routes;