const config = require("./config");

module.exports = require("knex")({
  client: "postgres",
  connection: {
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
  },
});
