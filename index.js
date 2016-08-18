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

<<<<<<< HEAD
app.get('/unique-pin', function(req, res){
  res.render('unique-pin');
=======
<<<<<<< HEAD
app.get('/message', function(req, res){
  res.render('message');
=======
app.get('/verification', function(req, res){
  res.render('verification');
>>>>>>> 4400644b521026e031588d9c1aff7553e2ffa974
>>>>>>> d9bb1a41045a9619f497a54d541d1c4a0183c549
});

var port = process.env.port || 3007;
http.listen(port, function(){
    console.log('running at port :' , port)
});
