

exports.get = function (req, res , next){
    var input = req.body;

    // console.log(input);
    var data = {
        username : input.username,
        password : input.password
        }
    req.getConnection(function (err, connection){
        if (err)
            return next(err)
        var query = "SELECT * From credentials WHERE username = ?";

        connection.query(query,[data.username],function (err, results){
                console.log(results);
                res.render("/log-in",{
                  results: results
                });
        });
    });
};
exports.userLogin = function(req, res, next) {
    var input = req.body;
    console.log(input);
    var username = input.username;
        req.getConnection(function(err, connection) {
            if (err)
                return next(err)
            connection.query('SELECT * from credentials WHERE username=?', [username], function(err, users) {
            var user = users[0];

            // bcrypt.compare(input.password, user.password, function(err, pass) {
            //     if (err) {
            //         console.log(err);
            //     }
            //     if (pass) {
            //
            //         req.session.user = username;
            //         req.session.user_role = user.user_role;
            //         req.session.is_admin = req.session.user_role === "Admin"
            //
            //
            //
            //     } else{
            //         return res.redirect('/');
            //     }
            // });
             res.redirect('/transaction')
        });
    });
};
