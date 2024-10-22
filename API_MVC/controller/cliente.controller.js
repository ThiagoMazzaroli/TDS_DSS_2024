const clientes = [{
    id: 1,
    nome: "Guilherme Pires",
    email: "guilherme.pires@gmail.com",
    senha: "123456"
}];

// CRUD 
module.exports = ({
    cadastro: (req, res) => {
        const { id, nome, email, senha } = req.body;

        if (!id) {
            return res.status(400).send("É obrigatorio enviar o campo id!");
        } else if (!nome) {
            return res.status(400).send("É obrigatorio enviar o campo nome!");
        } else if (!email) {
            return res.status(400).send("É obrigatorio enviar o campo email!");
        } else if (!senha) {
            return res.status(400).send("É obrigatorio enviar o campo senha!");
        }

        // for(let i=0; i < clientes.length; i++){
        //     if(clientes[i].id == id){
        //         return res.status(404).send(`O código ${id} já está em uso!`)
        //     }
        // }

        clientes.filter((item) => {
            if (item.id == id) {
                return res.status(404).send(`O código ${id} já está em uso!`)
            }
        });

        clientes.push(req.body);

        return res.status(200).send(req.body);
    },
    atualizar: (req, res) => {
        const { id, nome, email, senha } = req.body;

        clientes.filter(item => {
            if (item.id === id) {
                item.nome = nome;
                item.email = email;
                item.senha = senha;
                return res.send("Cliente atualizado com sucesso!")
            }
        })

        return res.status(400).send("Cliente não encontrado!");
    },
    deletar: (req, res) => {
        const { id } = req.params;

        const index = clientes.findIndex(item => item.id == id);

        if (index === -1) {
            return res.status(400).send("Código do cliente não existe")
        }

        clientes.splice(index, 1);

        return res.send(clientes);
    },
    consulta: (req, res) => {
        return res.status(200).send(clientes);
    },
    consultaPorID: (req, res) => {
        const { id } = req.params;

        const cliente = clientes.filter(item => item.id == id);

        if (!cliente.length) {
            return res.status(400).send("O código do cliente é inválido!");
        }

        return res.send(cliente);
    }
});