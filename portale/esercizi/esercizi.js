function terminale() {
  for(i = 1; i < 4; i++){
    var testo = $('.text'+i).data('text');
    var righe = testo.split('/n');
    $.each(righe, function(index, riga) {
      $('.text'+i).append('<span class="terminal" style="display:block;" id="'+ index+ i + '"></span>');
      i = i.toString();
      var rigaID = index+i;
      var self = $(this);
        setTimeout(function () {
          //ogni riga
          $.each(self, function(index, carattere){
              setTimeout(function () {
                //ogni char
                $("#"+rigaID).append("<span>"+carattere+"</span>");
                $('.classe-terminale').scrollTop($(document).height());
              }, index*30);
          });
        }, index*1200);
    });
  }
}

function checkA(index){
  var ArrayR = new Array($('#risposta1').data('text'),$('#risposta2').data('text'),$('#risposta3').data('text'));
  var esatte = 0;
  for(i = 1; i < 4 ; i++){
    if (ArrayR[i-1] == $("#risposta"+i.toString()).val().replace(/"/g, "'")){    
      esatte++;
      $("#risposta"+i.toString()).attr('disabled','disabled');
      $("#risposta"+i.toString()).css("border-color", "green");

      $("#variabile"+i.toString()).removeClass("alert-danger");
      $("#variabile"+i.toString()).addClass("alert alert-success");
      $("#variabile"+i.toString()).html("Risposta Corretta!");
    } else {
      if($("#risposta"+i.toString()).val())
        $("#variabile"+i.toString()).html("Risposta Sbagliata!");
      else
        $("#variabile"+i.toString()).html("Inserire Risposta!");
      $("#variabile"+i.toString()).addClass("alert alert-danger");

      $("#risposta"+i.toString()).css("border-color", "red");
    }
  }
  if ( esatte < 3){
    $("#btn-form").css("border-color", "red");
    return false;
  }
  $("#btn-form").css("border-color", "green");
  aggiornaProgressi('java','corso0',index);
  return false;
}


function progressiEsercizi(corso,visualizza){

  // Variabile di Testing (da cambiare in development)
  var user = "francesco";
  /*$.get("../../sessionControl/sessionConìtrol.php", function(data, status, xhr){
      user = data;
  });*/

  $.getJSON("../../server/progressi.json", function(json){
    var value = json[user][corso];
    value = value[visualizza];
    var somma = 0;
    for( i = 0; i < value.length; ++i){
        somma += value[i]; 
        if (value[i]){
          $("#"+ corso +"-"+visualizza+"-" + i).css({"background-color": "green", "color": "white"});
          $("#"+ corso +"-"+visualizza+"-" + i).append("<i class='fas fa-check'></i>");
          //$("<i class='fas fa-check'></i>").insertAfter(".testo-"+json[user][corso]);
          //Style extra => style='position: absolute; left : 75px; font-size: 30px
        }
    };
    var barra = (100/value.length) * somma;
    if(somma == 0){
      barra = 0;
    }
    $("#"+ corso +"-"+visualizza+"-barra").css("width",barra +"%");
    $("#"+ corso +"-"+visualizza+"-barra").html(barra +"% completato");
    });
};

//  Funzione che +1 ai progressi
function aggiornaProgressi(corso,visualizza,i){
      // Variabile di Testing (da cambiare in development)
      var username = "francesco";
      /*$.get("../../sessionControl/sessionConìtrol.php", function(data, status, xhr){
      user = data;
      });*/

      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", "../../server/aggiornaJson.php", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("user="+ username +"&corso=" + corso + "&visualizza="+ visualizza +"&i="+ i);   
    }