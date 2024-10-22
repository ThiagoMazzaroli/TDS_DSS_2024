const express = require('express');
const bodyParser = require("body-parser");
// baseUrl = http://localhost:8080

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const clientes = [{
    id: 1,
    nome: "Guilherme Pires",
    email: "guilherme.pires@gmail.com",
    senha: "123456"
}];

app.post("/cadastro", (request, response) => {

    const { id, nome, email, senha } = request.body;

    if (!id) {
        return response.status(400).send("É obrigatorio enviar o campo id!");
    } else if (!nome) {
        return response.status(400).send("É obrigatorio enviar o campo nome!");
    } else if (!email) {
        return response.status(400).send("É obrigatorio enviar o campo email!");
    } else if (!senha) {
        return response.status(400).send("É obrigatorio enviar o campo senha!");
    }

    // for(let i=0; i < clientes.length; i++){
    //     if(clientes[i].id == id){
    //         return response.status(404).send(`O código ${id} já está em uso!`)
    //     }
    // }

    clientes.filter((item) => {
        if (item.id == id) {
            return response.status(404).send(`O código ${id} já está em uso!`)
        }
    });

    clientes.push(request.body);

    return response.status(200).send(request.body);

})

app.get("/consulta", (request, response) => {
    return response.status(200).send(clientes);
})

app.get("/consulta/:id([0-9]+)", (request, response) => {
    const { id } = request.params;

    const cliente = clientes.filter(item => item.id == id);

    if (!cliente.length) {
        return response.status(400).send("O código do cliente é inválido!");
    }

    return response.send(cliente);

})


app.delete("/deletar/:id([0-9]+)", (request, reponse) => {
    const { id } = request.params;

    const index = clientes.findIndex(item => item.id == id);

    if (index === -1) {
        return reponse.status(400).send("Código do cliente não existe")
    }

    clientes.splice(index, 1);

    return reponse.send(clientes);
});

app.put("/atualizar", (request, response) => {

    const { id, nome, email, senha } = request.body;

    clientes.filter(item => {
        if (item.id === id){
             item.nome = nome;
             item.email = email;
             item.senha = senha;
            return response.send("Cliente atualizado com sucesso!")
        }
    })

    return response.status(400).send("Cliente não encontrado!");
})


app.listen(8080, () => {
    console.log("O servidor esta rodando na porta 8080");
})