
function controllo() {
  
    
    if ($(".testo1").css("display") == "block" ){
      $(".testo1").css("display","none");
      $(".testo2").css("display","inline");
      $("#meseanno").text("Mese");
    } else {
      $(".testo2").css("display","none");
      $(".testo1").css("display","inline");
      $("#meseanno").text("Anno");
    }
  }
  

    
    