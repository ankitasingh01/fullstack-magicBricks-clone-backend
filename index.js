const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(port);

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mysql = require("mysql");
// const app = express();

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "choco1!",
//   database: "magic_bricks",
// });

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/api/userauthentication", (req, res) => {
//   console.log(req.body);
//   const { user_name, user_password } = req.body;

//   const sqlQuery =
//     "INSERT INTO user_details (user_name, user_password) VALUES (?,?);";
//   db.query(sqlQuery, [user_name, user_password], (error, result) => {
//     console.log("result", result);
//     // res.send("hello world");
//   });
// });

// app.listen(3001, () => {
//   console.log("listening on 3001");
// });
