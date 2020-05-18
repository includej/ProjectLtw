function terminale() {
  for(i = 1; i < 4; i++){
    var printText = $('.text'+i).data('text');
    var contentArray = printText.split('/n');
    $.each(contentArray, function(index, newLine) {
      $('.text'+i).append('<span class="terminal" style="display:block;" id="'+ index+ i + '"></span>');
      i = i.toString();
      var lineID = index+i;
      var self = $(this);
        setTimeout(function () {
          //ogni riga
          $.each(self, function(index, chunk){
              setTimeout(function () {
                //ogni char
                $("#"+lineID).append("<span>"+chunk+"</span>");
                $('.classe-terminale').scrollTop($(document).height());
              }, index*30);
          });

        }, index*1200);
    });
  }
}

function checkA(){
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
  return false;
}



