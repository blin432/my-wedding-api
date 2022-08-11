const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    password:"kth18822",
    database:"rsvp_database",
    host:"localhost",
    port:5432
})
module.exports = pool;