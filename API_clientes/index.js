const express = require("express");
const bodyParser = require("body-parser");
const app = express()


app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const usuarios = [

]
let i = 1;

app.listen(8080, () => {
    console.log('massa')
})

app.post('/cadastro', (req, res) => {
    const {
        email, senha, nome, 
    } = req.body
    const usuario = {
        email, senha, nome, id: i
    }
    console.log(req.body)
    

    const emailUsado = usuarios.filter((u) => email === u.email
    )
    


    if(emailUsado.length == 0){
        usuario.id = i++
        usuarios.push(usuario)

}else{
    res.send("este usuario já foi cadastrado!")
}

res.send("usuario cadastrado com sucesso!")

})

app.get('/consulta', (req, res) => {
    res.status(200).send(usuarios)
})