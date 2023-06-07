const db = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const conn = db.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: process.env.password,
  database: process.env.database,
});

module.exports = conn;
