const dbConnection = require('./db_connections');
const fs = require('fs');

const sql = fs.readFileSync('__dirname/', 'db_build.sql').toString();
dbConnection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Feelings table for db-morning-challenge created with result:', result);
});