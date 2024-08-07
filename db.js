// npm i mysql, mysql2

const mysql = require('mysql2');
// If you are using Node.js with ES modules (e.g., your file has a .mjs extension or you have "type": "module" in your package.json), 
// you cannot use require directly. Instead, you need to use import.

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "nodejs",
    waitForConnections: true,
});

db.connect((err) => {
    if (err) {
        console.error('An error has occured while connecting to db:', err);
    } else {
        console.log('Connected to db');
    }
});

module.exports = db; 