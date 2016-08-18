var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'verit'
    // your connection details here
});

var sql = "INSERT INTO credentials (username, password) VALUES ?";

 var values = [
              ['siya', 'maps'],
              ['john', 'gininda'],
              ['taylor', 'maxedo'],
];
conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
