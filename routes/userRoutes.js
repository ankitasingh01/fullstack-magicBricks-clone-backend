const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

router.post("/userauthentication", (req, res, next) => {
  const { first_name, password, email, last_name } = req.body;
  const emailQuery = "SELECT * FROM user_details WHERE email = ?";
  db.query(emailQuery, [email], (err, results) => {
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    const string = JSON.stringify(results);
    const json = JSON.parse(string);

    if (json.length && json[0].email === email) {
      return res.status(409).json({
        message: "Mail exist",
      });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        } else {
          const user_password = hash;
          const sqlQuery =
            "INSERT INTO user_details (first_name, user_password, email, last_name) VALUES (?,?,?,?);";
          db.query(
            sqlQuery,
            [first_name, user_password, email, last_name],
            (error, result) => {
              res.status(201).json({
                first_name,
                email,
                last_name,
              });
            }
          );
        }
      });
    }
  });
});

module.exports = router;
