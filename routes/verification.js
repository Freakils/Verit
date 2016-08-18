exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err)
			return next(err);
		var query = 'SELECT  * from transactions';
		connection.query(query, [], function(err, results) {
			if (err)
				return next(err);

			var result = {
				transactions : results
			};
      console.log(results);

			res.render( 'verification', result);
		});
	});
};
