var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'verit'
    // your connection details here
});

var sql = "INSERT INTO transactions (shop_name, amount, transaction_date, user_id) VALUES ?";

var values = [
  ['nelisa_spaza', '350.00', '2016-09-20', 2],
  ['debonairs', '200.00', '2015-08-14', 1],
  ['shoprite_liquor', '450.00', '2016-19-08', 3]
];

console.log(values);

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
