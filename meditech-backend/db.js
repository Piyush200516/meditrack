require('dotenv').config();

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'meditech',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection().then(connection => {
console.log(`Connected to MySQL ${process.env.DB_NAME || 'meditech'} database`);
  connection.release();
}).catch(err => {
  console.error("DB Connection failed:", err.message);
});

module.exports = { pool };

