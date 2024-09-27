const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const usuarios = [

];

let i = 1;

app.listen(8080, () => {
    console.log('massa');
});

app.post('/cadastro', (req, res) => {
    
    const {
        email, senha, nome, 
    } = req.body;

    const usuario = {
        email, senha, nome, id: i
    };
    
    const emailUsado = usuarios.filter((u) => email === u.email);
    


    if(emailUsado.length == 0){
        usuario.id = i++;
        usuarios.push(usuario);

}else{
    res.send("este usuario já foi cadastrado!");
}

res.send("usuario cadastrado com sucesso!");

});

app.get('/consulta', (req, res) => {
    res.status(200).send(usuarios);
});

app.get('/consulta/:id', (req, res) => {
    console.log(req.params.id);
  
    
    const userFindId = usuarios.filter(usuario => usuario.id == req.params.id);
    
    res.status(200).send(userFindId);

});

app.delete('/excluir/:id', (req, res) => {
    
    const findUserById = usuarios.findIndex(usuario => usuario.id == req.params.id);
    usuarios.splice(findUserById, 1);

    res.send("usuario deletado com sucesso!");
});