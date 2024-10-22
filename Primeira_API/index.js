const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// base_url
// http://localhost:8080/


app.get("/", (request, response) => {
    response.status(404).send("O seu servidor está funciononando meu amigo! 🦧");
});

app.get("/novaRota", (request, response) => {
    response.send(`<h1>Olá Mundo!</h1>`);
});


app.get("/clientes", (request, response) => {
    const clientes = [
        {
            nome: "Guilherme",
            idade: 19
        },
        {
            nome: "João",
            idade: 26
        }
    ];

    response.send(clientes);
});

app.post("/cliente", (request, response) => {
    const cliente = request.body;

    response.send(cliente);
});

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080! 💀");
});

