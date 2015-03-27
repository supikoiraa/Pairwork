/*
https://github.com/dylang/shortid
Copyright (c) Dylan Greene
All rights reserved. 
*/

var mysql = require('mysql');
var shortid = require('shortid');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '*******',
  database : 'Shortener'
});

//Uudelleen ohjaus alkuperäisen urlin osoitteeseen.
exports.redirect= function(req,res,next){
  var link = req.params.uid;
  var Query = "SELECT address_long FROM links WHERE address_short LIKE '"+link+"'";
  var sendThis;

  connection.query( Query, function(err, rows, fields){
    if(err){
    
      console.log("No links were found!");
    }else
    {
      console.log(JSON.stringify(rows));
      for (i in rows)
      {var linkki =rows[i].address_long}
      res.redirect(301,linkki);
      }

  });
}

//tietokantaan lisääminen 
exports.insert= function(req, res){
//osoitteen lyhentäminen shortid-moduulilla
req.body.shorturl = shortid.generate(req.body.longurl);
 
 var insert = {address_long:req.body.longurl,address_short:req.body.shorturl};

  connection.query("INSERT INTO links SET ?",insert , function(err, rows, fields){
    if (err){
        console.log("Cannot insert links database");
       res.redirect(303,'/');
    }
    else{
       console.log(JSON.stringify(rows));
       res.redirect(303,'/');
     }
}

)};

//Html:ään tulostaminen
function linkit() {
$.get('/showdb', function(data){
var loki = data;
console.log(data);
$( '#links' ).empty();
/*Luodaan pari muuttujaa taulukon ylimmän rivin tulostamista varten*/
var longurl = "<b>Long Url </b>";
var shorturl = "<b>Short Url</b>";
/*Luodaan taulukko johon sijoitetaan lyhyt ja pitkä url*/
var $table = $( '<table class="table"></table>' );
var $line = $( "<tr></tr>" );
$line.append( $( "<td></td>" ).html( longurl ) );
$line.append( $( "<td></td>" ).html( shorturl ) );
$table.append( $line );
for ( i in loki ) {
var $line = $( "<tr></tr>" );
$line.append( $( "<td></td>" ).html( loki[i].address_long ) );
$line.append( $( "<td></td>" ).html( "http://localhost:3000/"+loki[i].address_short ));
$table.append( $line );
}
/*Liitetään taulukko HTML-dokumenttiin*/
$table.appendTo( $( '#links' ) );
});
};