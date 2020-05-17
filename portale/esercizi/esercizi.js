/*function terminale(){
  var printText = $('.text').data('text');
  
  var contentArray = printText.split('/n');
  $.each(contentArray, function(index, newLine){
    $('.text').append('<span class="terminale" style="display:block;" id="'+index+'"></span>');
     {
    var lineID = index;
    var self = $(this);
      setTimeout(function () {
        $.each(self, function(index, chunk){
            setTimeout(function () {
              $('#'+lineID).append("<span>"+chunk+"</span>");
              $('.classe-terminale').scrollTop($(document).height());
            }, index*30);
        });
        
      }, index*100);

    }     
  });
  
  
  var printTextDue = $('.text2').data('text');
  
  var contentArrayDue = printTextDue.split('/n');
  $.each(contentArrayDue, function(index, newLine) {
    $('.text2').append('<span class="terminal" style="display:block;" id="'+ index+1 + '"></span>');
    
    var lineID = index+"1";
    var self = $(this);
      setTimeout(function () {
        $.each(self, function(index, chunk){
            setTimeout(function () {
              $("#"+lineID).append("<span>"+chunk+"</span>");
              $('.classe-terminale2').scrollTop($(document).height());
            }, index*30);
        });
        
      }, index*100);

      
  });
}
*/

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
          $.each(self, function(index, chunk){
              setTimeout(function () {
                $("#"+lineID).append("<span>"+chunk+"</span>");
                $('.classe-terminale').scrollTop($(document).height());
              }, index*60);
          });

        }, index*100);
    });
  }
}

function checkA(){
  var ArrayR = new Array($('#risposta1').data('text'),$('#risposta2').data('text'),$('#risposta3').data('text'));
  var esatte = 0;
  for(i = 1; i < 4 ; i++){
    if (ArrayR[i-1] == $("#risposta"+i.toString()).val()) {      
      esatte++;
      $("#risposta"+i.toString()).attr('disabled','disabled');
      $("#risposta"+i.toString()).css("border-color", "green");
    } else {
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
