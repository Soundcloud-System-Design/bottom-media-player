const mysql = require("mysql");

var dbConnection = mysql.createConnection({
  user: "root",
  password: "password",
  database: "music",
});

dbConnection.connect();
module.exports = dbConnection;
