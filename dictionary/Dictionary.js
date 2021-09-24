var mysql = require('mysql');
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

con.connect(function (err) {
    if (err) throw err;

});

app.use(cors({
    origin: '*'
}));

app.get('/', function (req, res) {
    let searchKeyword = req.query.word;
    var sql = 'SELECT * FROM entries.entries WHERE word = ' + mysql.escape(searchKeyword);
    con.query(sql, (err, result) => {
        if (err) throw error;
        res.json(result);
    })
});

app.listen('3000', () => {
    console.log('server started on port 3000');
})