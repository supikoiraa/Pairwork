var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var path = require("path");


var functio = require("./client/function.js")
// vasta lisätty
var port = 3000;
//Määritellään mistä käyttöliittymän kilkkeet löytyy
app.use(express.static(__dirname + '/client'));
app.get('/', function(req, res)
{
res.sendFile(__dirname + '/client/käyttöliittymä.html');
});
// Luodaan yhteys mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : '*******',
database : 'Shortener'
});

app.use(require('connect').bodyParser());
app.post('/insert', functio.insert);
app.post('/search', functio.redirect);
app.get('/showdb', function(req, res) {
  var Query = 'SELECT * FROM links';
  var sendThis;

  connection.query( Query, function(err, rows, resp){
      console.log(rows);
      sendThis = rows;
      res.send(sendThis);
      
  });
});



app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});
 
// käsitellään 404 errorit
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }
 
  res.send(err.message || '** You should use proper Shorturl value **');
});

connection.connect();

//kuunnellaan porttia 3000
http.listen(3000, function(){
console.log('listening on http://localhost:'+port);
});

