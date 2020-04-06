const { Pool } = require("pg");

const pool = new Pool({
  user: "root",
  host: "localhost",
  database: "music",
  password: "getting started",
  port: 5432,
});

pool.connect();

module.exports = pool;
