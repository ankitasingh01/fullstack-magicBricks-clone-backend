const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "choco1!",
  database: "magic_bricks",
});

module.exports = db;
