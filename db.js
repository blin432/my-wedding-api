const Pool = require("pg").Pool;
const pool = new Pool({
    user:process.env.user,
    password:process.env.password,
    database:process.env.database,
    host:process.env.host,
    port:process.env.port
})

// let connString = process.env.DATABASE_URL 
// const { Pool } = require('pg');
// console.log('process',process.env.DATABASE_URL);
// const pool = new Pool({
//   connectionString : connString
// });
module.exports = pool;