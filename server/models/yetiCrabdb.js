/*------ Connection to Postgres DB BoilerPlate ---------*/
const {Pool} = require('pg');

//requiring our hidden database connection string
require('dotenv').config({path: '../.env'});

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_SECRET
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}