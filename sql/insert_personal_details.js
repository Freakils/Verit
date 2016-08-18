var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'verit'
    // your connection details here
});

var sql = "INSERT INTO personal_details (name, last_name, acc_no, acc_type, physical_address, user_id) VALUES ?";

 var values = [
              ['Siyabonga', 'Ngaba', 5670981234451, 'savings_acc', '34 Zone 12, Langa', 1],
              ['johnLee', 'mezodi', 4890265431633, 'check_acc', '15 Ndaba Str. Phillipi', 2],
              ['taylorSwift', 'bierber', 6791034352337, 'savings_acc', '24 Khwezi flats Soweto', 3]
];

//console.log(values);

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
