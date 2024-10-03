const mysql = require('mysql2');
const pool = mysql.createPool({
host: 'localhost', // your MySQL host
user: 'root', // your MySQL user
password: 'password', // your MySQL password
database: 'todo_app' // your database name
});
module.exports = pool.promise();