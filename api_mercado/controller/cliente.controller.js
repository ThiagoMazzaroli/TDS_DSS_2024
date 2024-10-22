const conn = require("../mysql-connection");

module.exports = ({
    cadastro: (req, res) => {
        const { nome, telefone } = req.body;

        var comando = ``;

        if (!telefone) {
            comando = `INSERT INTO CLIENTE(nome, 
            telefone) VALUES('${nome}',null)`
        } else {
            comando = `INSERT INTO CLIENTE(nome, 
            telefone) VALUES('${nome}','${telefone}')`
        }

        conn.raw(comando)
            .then((data) => {
                res.status(200).send({ msg: "Cliente cadastrado com sucesso!" });
            })
            .catch((error) => {
                res.status(500).send("Erro ao cadastrar um cliente!");
            });

    },
    consultar: (req, res) => {
        conn.raw("SELECT * FROM CLIENTE").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {
            console.log(erro);
            res.status(500).send("Erro ao consultar os clientes!");
        });
    },
    atualizar: (req, res) => {
        const { id, nome, telefone, status } = req.body;

        conn.raw(`UPDATE CLIENTE SET nome='${nome}', 
            telefone='${telefone}', 
            status=${status} WHERE id = ${id}`)
            .then((data) => {
                console.log(data);
                res.status(200).send({ msg: "Cliente atualizado com sucesso!" })
            }).catch((error) => {
                console.log(error);
                res.status(500).send({ msg: "Erro ao atualizar o cliente!" });
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        conn.raw(`DELETE FROM CLIENTE WHERE ID = ${id}`).then((data) => {
            console.log(data[0].affectedRows);

            if (data[0].affectedRows == 0) {
                return res.status(404).send({ msg: "Nenhum cliente encontrado com esse código!" });
            } else {
                return res.status(200).send({ msg: "Cliente deletado com sucesso!" });
            }

        }).catch((error) => {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao deletar o cliente!" });
        });
    },
    buscaPorId: (req, res) => {
        const { id } = req.params;

        conn.raw(`SELECT * FROM CLIENTE WHERE id = ${id}`).then((data) => {
            console.log(data);
            res.status(200).send(data[0]);
        }).catch((error) => {
            console.log(error);
            res.status(500).send("Erro ao consultar o cliente!");
        });
        
    }
})