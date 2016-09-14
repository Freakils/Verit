var express = require('express');
var expressHandlebars = require('express-handlebars');
var myConnection = require('express-myconnection');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var mysql = require('mysql');
var login = require('./routes/login');
var session = require('express-session');
var cookieParser = require('cookie-parser');
//var cookieSession = require('')
var dbOptions ={
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'verit'
    // your connection details here
}


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(session({
  secret:'silulu',
  cookie:{maxAge:60000},
  resave:false,
  saveUninitialized:true,
}))

//setup handlebars
app.engine('hbs', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'hbs');
app.use(myConnection(mysql,dbOptions,'single'))

// app.get('/login-in', login.get);
app.get('/', function(req,res){
  // console.log(input);
  res.render('log-in');
});

app.post('/log-in', login.userLogin);



io.on('connection', function (socket) {
  //socket.emit('news', { hello: 'world' });
  socket.on('scan', function (data) {
    console.log('scanned data');

    io.emit('scan', {});
  });
});

/*
app.get('/transaction', function(req, res){
  // console.log(req.body);
  res.render('transaction');
});
*/

app.post('/transaction', function(req, res){
  //console.log('***********************************');
  //console.log(req.body.username);

  var username = req.body.username;
  res.render('transaction', {username : username});
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
