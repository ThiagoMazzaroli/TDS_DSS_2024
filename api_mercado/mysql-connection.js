const knex = require("knex");

module.exports = knex({
    client: "mysql2",
    connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "mercado"
    }
});