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

function terminale2() {
  for(i = 1; i < 3; i++){
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
                $('.classe-terminale2').scrollTop($(document).height());
              }, index*60);
          });

        }, index*100);
    });
  }
}