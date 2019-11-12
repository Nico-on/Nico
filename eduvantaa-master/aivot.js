function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Suomi on Suomalaisille !</h1>" + 
        "<p>PERKELE...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML = "<table style='width:100%'>" +
        "<tr><td>maanantai</td></tr>" +
        "<tr><td>8-15</td></tr>"  +
        "<tr><td>Tiistai</td></tr>" +
        "<tr><td>8-16</td></tr>" +
        "<tr><td>keskiviikko</td></tr>" +
        "<tr><td>8-13</td></tr>" +
        "<tr><td>Torstai</td></tr>" +
        "<tr><td>8-14</td></tr>" +
        "<tr><td>Perjantai</td></tr>" +
        "<tr><td>8-14</td></tr>" +
        "</table>";
    }
    else if (boxNumber == 3){ 
        document.getElementById("laatikko3").innerHTML = "<img src='raccon.jpg'>";

        
    }
    else if (boxNumber ==4){
        document.location.reload();
    }
    
}
function yhteystietoFunktio() {
    alert("moi")
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = x.length-1; i >=0; i--) {
      text += x.name + x.elements[i].value + "<br>";

    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }
