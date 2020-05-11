function showP(){      //funzione mostra passwor// [0]d
    //var p = document.getElementById("password");
    //var p = $("#password");
    if (p.type == "password"){
      p.type = "text";
    } else {
      p.type = "password";
    }
}



  function check(){   //funzione controllo dati
    return false;
  }
    

$(document).ready(function(){
  $("#show").click(function(){  //Event onClick Mostra Password
    //var p = document.getElementById("password");
    var p = $("#password")[0];
    if (p.type == "password"){
      p.type = "text";
    } else {
      p.type = "password";
    };
  });
  $("#login").submit(function() {   //event onSubmit form #login
    if (!check()){
        $(".error-login").css("display","inline");
        return false;       
    };
  });
  $("#dimenticata").submit(() => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test("#dimenticata")){   //event onSubmit form #dimenticata
         return true;
      };
        $(".error-mail").css("display","inline");
         return false;
  });
});
