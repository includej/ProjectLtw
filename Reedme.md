# PROJECT CODE

Lo scopo di Project Code è fornire agli utenti una piattaforma che consente un apprendimento rapido ed esaustivo dei linguaggi di programmazione.

Project Code è un'applicazione efficiente,modulare,scalabile:

- efficiente

- scalabile

- modulare

Le tecnologie utilizzate nella web application sono: 

   -CLIENT:    

- HTML

- BOOTSTRAP

- JAVASCRIPT

- JQUERY

- VUE.JS

- AJAX

-SERVER:

- PHP

- POSTGRESQL (DATABASE RELAZIONALE)



Lista pagine che compongono il sito e relativa spiegazione.

### Index:

Index.html elementi:

- Navbar:  abbiamo utilizzato Boostrap ed è suddivisa nei vari link associati alle relative pagine html.

- Corpo:  obiettivo del sito, bottone che reindirizza al portale, solo se si è loggati, altrimenti al login.

- Footer: Informazioni su autori.



Projectcode.css:

- Definizione stile navbar,sfondo,footer ed elementi pagina.

- Definizione stili per rendere la pagina responsive.



Projectcode.js:

- Utilizzato BACKSTRETCH (plug-in  di JQUERY) per fare la slide show dell'index.

```javascript
const initSfondo = (autoplay = true) => {  
    const nomeImmagini = ['img1.jpg', 'img2.jpg', 'img3.jpg'];  //ARRAY con le immagini della slideshow
    const sfondo = nomeImmagini.map(img => "img/" + img); // MAP : PRENDE OGNI ELEMENTO DI UN ARRAY E APPLICA LA FUNZIONE SU DI ESSO, in questo caso ad ogli immagine viene aggiunto il percorso relativo

    $.backstretch(sfondo, {duration: 4000, fade: 500}); //UTILIZZIAMO BACKSTRECH PERCHE' CI PERMETTE DI FARE LO SLIDESHOW
                                                        //DURATION: durata tra immagini
                                                        //FADE: durata transizione
    if(!autoplay) {
      $.backstretch('pause');                           //METTE IN PAUSA LA SLIDESHOW
    }    
}

const setSfondo = id => {                               //funzione che cambia l'immagine dello sfondo
    $.backstretch('show', id);                          //id numero d'immagine che voglio mostrare
}

const setSfondoOverlay = () => {                           //funzione per il responsive della diagonale
    const windowWidth = window.innerWidth;                 //larghezza finestra
    const altezzaSfondo = $('body').height();                   //altezzaSfondo
    const sinistraSfondo = $('.pc-bg-left');                     //sinistra

    $('.pc-bg').height(altezzaSfondo);                          //classe prende altezza sfondo

    if(windowWidth > 768) {                                     //larghezza finestra > 768 (responsive)
        sinistraSfondo.css('border-left', `0`)                  
                .css('border-top', `${altezzaSfondo}px solid transparent`);                
    } else {
        sinistraSfondo.css('border-left', `${windowWidth}px solid transparent`)
              .css('border-top', `0`);
    }
}

$(document).ready(function () {
    const autoplaySfondo = true;	// AutoPlay per sfondo
    initSfondo(autoplaySfondo);    // inizializzo lo sfondo
    setSfondoOverlay();                 //

    const bgControl = $('.pc-bg-control');            
    bgControl.click(function() {                    //Funzione dei tasti -> per cambiare lo sfondo
        bgControl.removeClass('active');            //rimuove classe 'active' a tutti i bottoni, rendendoli trasparenti
        $(this).addClass('active');                 //aggiunge classe 'active' al bottone, che rende il bottone relativo all'immagine dello sfondo bianco
        const id = $(this).data('id');              //da l'id
        setSfondo(id);                              //imposta lo sfondo
    });

    $(window).on("backstretch.after", function (e, instance, index) {           //Evento sucessivo al caricamento dell'immagine. 
                                                                                //funzione per lo slider
        const bgControl = $('.pc-bg-control');                              //classe pc-bg-control
        bgControl.removeClass('active');                                    //rimuove classe
        const current = $(".pc-bg-controls-wrapper").find(`[data-id=${index}]`);        //current = 
        current.addClass('active');                                     //pc-bg-controls-wrapper
    });

    $(window).resize(function() {     
        setSfondoOverlay();
    });
});
```

SessionControl.js:

- Controlla se l'utente è loggato,tramite richiesta AJAX al server.

```javascript
$(document).ready(function(){
    //  oggetto XML per richieste ajax
    var httpRequest = new XMLHttpRequest();         //  Crea l'oggetta AJAX
    httpRequest.onreadystatechange = gestisciResponse;      //  Event Handler
    httpRequest.open("POST","/sessionControl/sessionControl.php");  //Inizializza la richiesta, specificando i parametri
    httpRequest.send();     //invia la richiesta

    // funzione alla ricezione della risposta
    function gestisciResponse(e) {
            if (e.target.readyState == XMLHttpRequest.DONE && e.target.status == 200) {     //in caso si sia  ricevuto e si sia ultimato il trasporto del messaggio
                // Caso: se utente già  registrato, mostra nome utente + bottone Logout
                if (e.target.responseText){         
                    var str = e.target.responseText;
                    $("#userZone_btn").html(str);
                    $("#userZone_0").html("<a href='/login/logout.php' style='padding: 5px 3px 5px 3px'>Logout <span class='fas fa-sign-out-alt'></span></a>");
                    $("#userZone_2").html("Welcome " + str);
                } 
                // Caso: set utente non registrato, mostra bottone Login + Register
                else {
                    $("#userZone_btn").html("LOGIN");
                    $("#userZone_a").html("<a href='/login/login.php' style='padding: 5px 3px 5px 3px'>Login<span class='fas fa-sign-in-alt'>  </span></a><a href='/register/register.html' class='dropdown-item' style='padding: 5px 3px 5px 3px'>Register<span class='fas fa-user-plus'>  </span></a>");
                    $("#userZone_0").html("<a href='/login/login.php' style='padding: 5px 3px 5px 3px'>Login<span class='fas fa-sign-in-alt'>  </span></a>");
                    $("#userZone_1").html("<a href='/register/register.html' style='padding: 5px 3px 5px 3px'>Register<span class='fas fa-user-plus'>  </span></a>");
                }
        }
    }

 
    function isLogged(){     //funzione per reindirizza l'utente in caso provi ad accedere al portale senza essersi loggato
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = gestisciResponse;
        httpRequest.open("POST","/sessionControl/sessionControl.php", false);
        httpRequest.send();
    
        function gestisciResponse(e) {
            if (e.target.readyState == XMLHttpRequest.DONE && e.target.status == 200) {
                // Caso: se utente già loggato, non fa nulla
                if (e.target.responseText){                
                } 
                // Caso: se utente già non è loggato, fa una ridirect alla pagina di login
                else {
                    window.location="/login/login.php";
                }
            }
        }
    }

});
```

     

       

# Register:

Register.html:

- Navbar

- Form per la registrazione

- Bottone per mostrare la password



Register.css:

- Definizione stile navbar ed elementi pagina.

- Definizione stile blocco registrazione

- Animazioni scritte (focus, valide
  
  

Register.js:

- Funzione mostra password
  
  ```javascript
  $("#show").click(function(){  //Event onClick Mostra Password
      var p = $("#password")[0];
      if (p.type == "password"){
        p.type = "text";
      } else {
        p.type = "password";
      };
  });
  ```

- Funzione  che controlla se il formato mail è corretto e  carica la pagina php per controllare se l'utente è gia registrato nel database (alert-danger), se non lo è lo registra (alert-success). 
  
  ```javascript
  function ajaxvalid(){
      //  Controllo validità email
      var e = document.getElementById("inEmail");
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(e)){    //controlla se la mail è nel formato giusto tramite l'espressione regolare
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
  ```

Register.php:

- Interroga il database per verificare se l'utente è già registrato, se non lo è invia le informazioni dell'utente al database.
  
  ```php
  query = "SELECT * FROM utente WHERE email = '{$email}' AND username = '{$user}' AND password = '{$pass}'";     //  Query che controlla se esiste un record con dati uguali
          $result = pg_query($db, $query) or die('Query fallita '.pg_last_error());    //  Esegui query sul DB $dbcon
          if (!pg_num_rows($result)){     //  Check se non esiste già una row con i parametri inserti della form
              $inQuery = "INSERT INTO utente VALUES('{$nome}','{$cognome}','{$email}','{$pass}', '{$user}')";
              $result = pg_query($db, $inQuery) or die.('Query fallita '.pg_last_error());     // Esegue query di inserimentoe inizializza i progressi dell'utente.
  ```

- se la registrazione va a buon fine, vengono inizializzati i progressi dell'utente.





# Login:

Login.php:

    parte PHP:

- controlla se i dati inseriti dell'utente corrispondono ad un record del database.
  
  parte HTML:

-  Navbar

- Form per la registrazione

- Bottone per mostrare la password

Login.css:

- Definizione stile navbar ed elementi pagina.

- Definizione stile blocco login

- Animazioni scritte (focus, valide)





# Portale:

Portale.html:

- Navbar

- Barra laterale sinistra: home + dropdown per ogni corso

- Dashboard o corpo portale, che contiene la pagina richiesta dall'utente

Portale.css

- Definizione stili navbar

- Definizione stili barra laterale

- Definizione stili dashboard

Portale.js:

- Funzione che controlla se lutente è loggato con eventuale reindirizzamento alla pagina di login

- Funzioni dropdown (lista+ animazione freccia)

- Funzione che carica lo sfondo in base al linguaggio selezionato

- Funzione che reindirizza all'ultima lezione/esercizo non svolto

- Funzione che mostra la storia

- Funzione che carica la documentazione

- Funzione che controlla i progressi dell'utente e cambia le percentuali delle barre di progresso del linguaggio selezionato

App.js:

- Component Vue.js usato come template per i linguaggi della dashboard

- Funzione dashboard crea l'oggetto Vue.js, che associa ad ogni singolo riquadro creato un linguaggio



# Lista corsi:

Corsi.js:

- Funzione che carica i corsi del linguaggio selezionato ne setta lo sfondo e carica i progressi dei corsi

- Funzione che carica la lista delle lezioni e degli esercizi del corso selezionato e carica i progressi delle lezioni e degli esercizi svolti

Corsi.css:

- Definizione stili corsi

- Definizione stili barra progressi



# Lista lezioni/esercizi:

Visualizza.js:

- Funzione che carica la lezione in cui viene chiamata la funzione che carica il video

- Funzione che carica il video

- Funzione che carica gli esercizi

Visualizza.css:

- Definizione stili contenitore lista lezioni/esercizi 

- Definizione stili lezioni



# Esercizi:

Esercizi.js:

- Funzione che carica il terminale e relativa animazione

- Funzione che controlla le risposte date agli esercizi

- Funzione che aggiorna i progressi dell' utente.

Esercizi.css:

- Definizione stili esercizi



# Storia:

Storia.js:

- Funzione che crea la timeline della storia e setta lo sfondo 

Storia.css:

- Definizione stili timeline e storia



# Documentazione:

Documentazione.html:

- Documentazione per ogni linguaggio 



# Contatti:

Contact.html:

- Navbar

- Contenitori schede autori 

- Form messaggio

Contact.css:

- Definizione stili navbar

- Definizione stili schede autori

- Definizione stili form messaggio

Contact.js:

- Funzione che invia mail contenete messaggio utente

- Funzione che seleziona autore del sito da contattare 

- Funzione che visualizza la form per inviare il messaggio

- Funzione che ripristina le schede autori

- Funzione che fa sparire tutte le schede degli autori e la form



# Negozio:

Negozio.html:

- Navbar

- Bottone selezione piano mensile/annuale

- Contenitore piani abbonamento

- Footer

Negozio.css:

- Definizione stili navbar

- Definizione stili piani abbonamento

- Definizione stili footer

Negozio.js:

- Funzione selezione piano mensile/annuale
