var express = require('express');
var expressHandlebars = require('express-handlebars');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'));

//setup handlebars
app.engine('hbs', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('log-in');
});

app.get('/transaction', function(req, res){
  res.render('transaction');
});

app.get('/unique-pin', function(req, res){
  res.render('unique-pin');
});

var port = process.env.port || 3007;
http.listen(port, function(){
    console.log('running at port :' , port)
});
