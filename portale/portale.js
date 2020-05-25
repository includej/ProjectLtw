if(isLogged() == false){
    window.location = "../login/login.php";
};

$(document).ready(function(){

    // Dropdown Java + movimento freccia
    $("#btn-java").click(function (e) {
        e.preventDefault();
        $("#contenitore").toggleClass("li-java-on");
        direzioneFreccia($("#freccia-java"));
    });

    // Dropdown Python + movimento freccia
    $("#btn-python").click(function (e) {
        e.preventDefault();
        $("#contenitore").toggleClass("li-python-on");
        direzioneFreccia($("#freccia-python"));
    });

    // Dropdown Ruby + movimento freccia
    $("#btn-ruby").click(function (e) {
        e.preventDefault();
        $("#contenitore").toggleClass("li-ruby-on");
        direzioneFreccia($("#freccia-ruby"));
    });

    // Dropdown Scala + movimento freccia
    $("#btn-scala").click(function (e) {
        e.preventDefault();
        $("#contenitore").toggleClass("li-scala-on");
        direzioneFreccia($("#freccia-scala"));
    });

    // Dropdown Bash + movimento freccia
    $("#btn-bash").click(function (e) {
        e.preventDefault();
        $("#contenitore").toggleClass("li-bash-on");
        direzioneFreccia($("#freccia-bash"));
    });

    // Dropdown Javascript + movimento freccia
    $("#btn-javascript").click(function (e) {
        e.preventDefault();
        $("#contenitore").toggleClass("li-javascript-on");
        direzioneFreccia($("#freccia-javascript"));
    });



    // FUNZIONE direzioneFreccia
    function direzioneFreccia(freccia){;
        if ($(freccia).attr("class") == "fas fa-caret-down"){
            $(freccia).removeClass("fas fa-caret-down");
            $(freccia).addClass("fas fa-caret-up");
        }
        else{
            $(freccia).removeClass("fas fa-caret-up");
            $(freccia).addClass("fas fa-caret-down");
        }    
    }    
});

//Funzione scorciatoia associata a Vue
function scorciatoia(corso){
    var nome_corso = corso.toLowerCase();
    /*var user = "francesco";*/
    $.get("../sessionControl/sessionControl.php", function(data, status, xhr){
        user = data;
    });
    var flag = false;
    $.getJSON("../server/progressi.json", function(json){
        $.each(json[user][nome_corso],function(index, value){
            /*index = corso 0, i = 0, nome_corso = java */
            if (flag){
                return false;
            }
            for( i = 0; i < value.length; ++i){
                /*alert(index+" "+i+" "+nome_corso);*/
                if( (value[i]) == 0 ){
                    flag = true;
                    if ((i%2)== 0){
                        aggiornaProgressi(nome_corso,index,i);
                        index= index.substring((index.length)-1);
                        caricaLezione(nome_corso,(i/2),index);       
                    }
                    else{
                        index= index.substring((index.length)-1);
                        caricaEsercizi(nome_corso, index, i);
                    }
                    break;
                } 
            
            };
        }); 
    });
}  


// Funzione caricaDocumentazione
function caricaDocumentazione(id,tipo,cambio){
    //  Carica la Pagina
    $("#dynam").empty();
    $("#dynam").load( tipo + "/" + tipo + ".html ." + id);

    caricaSfondo(cambio,false);
}

//Funzione mostraStoria
function mostraStoria(i){
    $("#testo"+i).show(1000*2);
    $("#bordo-"+i).css("border-right","3px solid green");
}

//Funzione caricaSfondo
function caricaSfondo(nome_sfondo,colore){
    if (colore){
        $(".contenitore-fluid").css("background-image" , "unset");
        $(".contenitore-fluid").css("background-color" , nome_sfondo);
    }
    else{
        $(".contenitore-fluid").css("background-image" , "url('../img/" + nome_sfondo +".png')");
    }
}

//Funzione ProgressiCorsi
function progressiCorsi(corso){
    /*var user = "francesco";*/
    $.get("../sessionControl/sessionControl.php", function(data, status, xhr){
        user = data;
    });
    $.getJSON("../server/progressi.json", function(json){
        console.log(user + " -- " + corso);
        $.each(json[user][corso],function(index, value){
            console.log(user + " -> " + value);
            var somma = 0;
            for( i = 0; i < value.length; ++i){
                somma += value[i];     
                                                  //Riempimento barra
            };
            var barra = (100/value.length) * somma;
            if (somma == 0){
                barra=0;
            }
            
            //$("#"++"-"+x+"-barra").css("width",barra+"%");
            $("#"+ corso +"-"+index+"-barra").css("width",barra +"%");
            $("#"+ corso +"-"+index+"-barra").html(barra +"% completato");
            }
        );
    });
};





