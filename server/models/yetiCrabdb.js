//Connection to Postgres DB
const {Pool} = require('pg');
require('dotenv').config({path: '../.env'});

console.log(process.env.DB_CONNECTION_SECRET, typeof process.env.DB_CONNECTION_SECRET);
const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_SECRET
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}