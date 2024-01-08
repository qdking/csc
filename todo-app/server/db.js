const Pool = require("pg").Pool;
require("dotenv").config();

const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: "12345",
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: "maple-cass-app",
});

module.exports = pool;
