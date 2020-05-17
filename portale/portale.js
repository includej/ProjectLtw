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

//  FUNZIONA CaricaPagina
function caricaPagina(id,tipo,cambio){
    $("#dynam").empty();
    $("#dynam").load( tipo + "/" + tipo + ".html ." + id);

    //  Cambio Sfondo a seconda delle sezione entrata
    if (cambio){
        var back = $(".contenitore-fluid").css("background-image") ;
        back=back.slice(back.lastIndexOf("/")+1,-6)
        if ( back != cambio){
            if(cambio=="blank"){

                // Caso: di entrata di esercizi -> sfondo nero
                $(".contenitore-fluid").css("background-image" , "unset");
                $(".contenitore-fluid").css("background-color" , "black");
            } else {

                // Caso: entrato in un corso
                $(".contenitore-fluid").css("background-image" , "url('../img/" + cambio +".png')");
            }
        }
    }
}

//  FUNZIONE CaricaVideo
function caricaVideo(arg){
    $("#zonaVideo").addClass("show");
    $("#videoLezione").attr("src", "https://www.youtube.com/embed/"+ arg +"?controls=0");
}

function progressiCorsi(corso){
    var user = "provadovrebbeandare";
    $.get("../sessionControl/sessionControl.php", function(data, status, xhr){
        user = data;
    })

    $.getJSON("../server/progressi.json", function(json){
        console.log(user + " -- " + corso);
        $.each(json[user][corso],function(index, value){
            console.log(user + " -> " + value);
            var somma = 0;
            for( i = 0; i < value.length; ++i){
                somma += value[i];                                       //Riempimento barra
            };
            var barra = (100/value.length) * somma;
            //$("#"++"-"+x+"-barra").css("width",barra+"%");
            $("#"+ corso +"-"+index+"-barra").css("width",barra +"%");
            $("#"+ corso +"-"+index+"-barra").html(barra +"% completato");
            }
        );
    });
};