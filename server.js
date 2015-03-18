var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var path = require("path");
var port = 3000;
//Määritellään mistä käyttöliittymän kilkkeet löytyy
app.use(express.static(__dirname + '/client'));
app.get('/', function(req, res){
res.sendFile(__dirname + '/client/käyttöliittymä.html');
});
// Luodaan yhteys mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : '********',
database : 'Shortener'
});


connection.connect();

//haetaan tilattuja tuotteita, jotka ovat tuotelistassa



//kuunnellaan porttia 3000
http.listen(3000, function(){
console.log('listening on http://localhost:'+port);
});
