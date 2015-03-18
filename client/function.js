

//Tulostetaan kaikki tuotelista taulussa olevat tuotteet
function tuote(){
$.get('/nimi', function(data){
  var tuote = data;
    var out = "";
    var i;
    for(i in tuote) {
      var name = tuote[i].nimi;
     out +=  "Tilauksen numero: " +tuote[i].tilausid +" \t "+"Nimi: "+ name  +"\t"+"Tuotteen Hinta: " +tuote[i].hinta +"<br>  ";
     
     document.getElementById("tuote").innerHTML = out;
    }
    });
};

//Tulostetaan ostotapahtumat, jotka tehty 4.11.2014
function osto(){
$.get('/osto', function(data){
  var tuote = data;
    var out = "";
    var i;
    for(i in tuote) {
      var tilausid =tuote[i].tilausid;
      var pvm = tuote[i].pvm;
     out +=  "Ostotapahtuma: " +tilausid +" \t "+"Asiakkaan etunimi: "+tuote[i].etunimi +"\t"+"Ostopäivä : " +pvm +"<br>  ";
     
     document.getElementById("osto").innerHTML = out;
    }
});
};
//Tulostetaan palkkaerittelyt, joissa työntekijän palkka ylittänyt 2800€
function palkka(){
$.get('/palkka', function(data){
  var tuote = data;
    var out = "";
    var i;
    for(i in tuote) {
      var name = tuote[i].nimi;
     out +=  "Palkkaerittely id: " +tuote[i].palkkaid +" \t "+"Nimi: "+ tuote[i].etunimi +"\t"+"Maksettu : " +tuote[i].palkka +"€"+"<br>  ";
     
     document.getElementById("palkka").innerHTML = out;
    }
    });
};



/*Sivun tyhjennys*/
function tyhjennys() {
  $( '#tuote' ).empty();
  $( '#palkka' ).empty();
  $( '#osto' ).empty();
}

