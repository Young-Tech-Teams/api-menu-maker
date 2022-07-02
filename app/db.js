const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()



// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: process.env.BDD_HOST,
    user: process.env.BDD_USER,
    password: process.env.BDD_MDP,
    database: process.env.BDD_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
const mySqlClient = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "menu_maker"
})
this.db = mySqlClient.connect(function(err) {
    if (err) throw err
    console.log("Connected!")
})
module.exports = mySqlClient