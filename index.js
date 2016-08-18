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


io.on('connection', function (socket) {
  //socket.emit('news', { hello: 'world' });
  socket.on('scan', function (data) {
    console.log('scanned data');

    io.emit('scan', {});
  });
});

app.get('/', function(req, res){
    res.render('log-in');
});

app.get('/transaction', function(req, res){
  res.render('transaction');
});


app.get('/unique-pin', function(req, res){
  res.render('unique-pin', {layout : false});
});

app.get('/message', function(req, res){
  res.render('message');
});

app.get('/verification', function(req, res){
  res.render('verification');
});

app.get('/nozuko-shop', function(req, res){
  res.render('nozuko-shop')
});

app.get('/error', function(req, res){
  res.render('error')
});

var port = process.env.port || 3007;
http.listen(port, function(){
    console.log('running at port :' , port)
});
