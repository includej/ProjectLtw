$("#show").click(function(){  //Event onClick Mostra Password
    var p = $("#password")[0];
    if (p.type == "password"){
      p.type = "text";
    } else {
      p.type = "password";
    };
});

function ajaxvalid(){
    //  Controllo validità emai
    var email = $("#inEmail").val();
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)){    //controlla se la mail è nel formato giusto tramite l'espressione regolar
        document.getElementById("error-mail").style.display = "inline";
        return false;
    }
    //  Controllo se utente esiste già nel Database
    $.post("register.php", $("#registr").serialize(), function(data, status, xhr){  // Prende i valori di ogni campo e li converte in una stringa nella notazione standard URL
        if(data!='0'){

            // Caso: Registrazione fallita
            $("#variabile").html(data);
            $("#variabile").addClass("alert alert-danger");
        } else {

            // Caso: Registrazione avvenuta con successo
            $("#variabile").removeClass("alert-danger");
            $("#variabile").addClass("alert alert-success");
            $("#variabile").html("Registrazione avvenuta con successo!");
            setTimeout(function(){window.location="../login/login.php";}, 3000);
        }
    });
    
    // Ritorna sempre false, per bloccare il reindirizzamento della submit
    return false;
}