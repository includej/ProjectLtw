$(document).ready(function(){
    //  oggetto XML per richieste ajax
    var httpRequest = new XMLHttpRequest();         //  Crea l'oggetto AJAX
    httpRequest.onreadystatechange = gestisciResponse;      //  Event Handler
    httpRequest.open("POST","/sessionControl/sessionControl.php");  //Inizializza la richiesta, specificando i parametri
    httpRequest.send();     //invia la richiesta

    // funzione alla ricezione della risposta
    function gestisciResponse(e) {
            if (e.target.readyState == XMLHttpRequest.DONE && e.target.status == 200) {     //in caso si sia  ricevuto e si sia ultimato il trasporto del messaggio
                // Caso: se utente già loggato, mostra nome utente + bottone Logout
                if (e.target.responseText){         
                    var str = e.target.responseText;
                    $("#userZone_btn").html(str);
                    $("#userZone_0").html("<a href='/login/logout.php' style='padding: 5px 3px 5px 3px'>Logout <span class='fas fa-sign-out-alt'></span></a>");
                    $("#userZone_2").html("Welcome " + str);
                } 
                // Caso: set utente non loggato, mostra bottone Login + Register
                else {
                    $("#userZone_btn").html("LOGIN");
                    $("#userZone_a").html("<a href='/login/login.php' style='padding: 5px 3px 5px 3px'>Login<span class='fas fa-sign-in-alt'>  </span></a><a href='/register/register.html' class='dropdown-item' style='padding: 5px 3px 5px 3px'>Register<span class='fas fa-user-plus'>  </span></a>");
                    $("#userZone_0").html("<a href='/login/login.php' style='padding: 5px 3px 5px 3px'>Login<span class='fas fa-sign-in-alt'>  </span></a>");
                    $("#userZone_1").html("<a href='/register/register.html' style='padding: 5px 3px 5px 3px'>Register<span class='fas fa-user-plus'>  </span></a>");
                }
        }
    }
});

function isLogged(){     //funzione per reindirizza l'utente in caso provi ad accedere al portale senza essersi loggato
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = gestisciResponse;
        httpRequest.open("POST","/sessionControl/sessionControl.php", false);
        httpRequest.send();
    
        function gestisciResponse(e) {
            if (e.target.readyState == XMLHttpRequest.DONE && e.target.status == 200) {
                // Caso: se utente gi?ÿloggato, non fa nulla
                if (e.target.responseText){                
                } 
                // Caso: se utente gi?ÿnon ? loggato, fa una ridirect alla pagina di login
                else {
                    window.location="/login/login.php";
                }
            }
        }
    }