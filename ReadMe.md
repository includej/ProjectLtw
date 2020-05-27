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
    const autoplaySfondo = true;    // AutoPlay per sfondo
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

- Navbar

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

- Funzione che controlla se l'utente è loggato con eventuale reindirizzamento alla pagina di login

- Funzioni dropdown (lista+ animazione freccia)

- Funzione che carica lo sfondo in base al linguaggio selezionato

- Funzione che reindirizza all'ultima lezione/esercizo non svolto
  
  ```javascript
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
  ```

- Funzione che mostra la storia

- Funzione che carica la documentazione

- Funzione che controlla i progressi dell'utente e cambia le percentuali delle barre di progresso del linguaggio selezionato

App.js:

- Component Vue.js usato come template per i linguaggi della dashboard

- Funzione dashboard crea l'oggetto Vue.js, che associa ad ogni singolo riquadro creato un linguaggio

# Lista corsi:

Corsi.js:

- Funzione che carica i corsi del linguaggio selezionato ne setta lo sfondo e carica i progressi dei corsi
  
  ```javascript
  function caricaLinguaggio(corso){
      $("#dynam").empty();
      caricaSfondo(corso,false);    
      for(i=0;i<7;i++){
  
          var nome_corso= "Corso "+i;
          if (i== 0){
              nome_corso= "Introduzione";
          }
          $("#dynam").append(        
              `<div>
                  <a href="#" class="link-corso" onclick="caricaCorso('`+ corso + `','` + i + `');">
                      <div id="contenitore-foto" class="container-fluid">
                          <img src="../img/`+ corso + `.jpg" class="img-fluid" style="max-width: 80%; height: auto;">
                          <div class="divIntro">
                              <h1 id="testo_+ `+ corso + `">` + nome_corso + `</h1>
                          </div>
                          <div class="divAttiv">
                              <h6 id="testo_+ `+ corso + `">4 Activities</h6>
                          </div>
                          <span class="fa-stack fa-2x divNumb">
                              <i class="fa fa-circle-notch fa-stack-2x"></i>
                              <strong class="fa-stack-1x">` + i + `</strong>
                          </span>
                          <div class="progress divProg">
                              <div class="progress progress-bar progress-bar-success bg-success" id="`+corso+`-corso`+i+`-barra" style="width:50%; ">
                                      50% Completato
                              </div>
                          </div>
                      </div>
                  </a>
              </div>`);
      }
      progressiCorsi(corso);
  }
  ```

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
  
  ```javascript
  function terminale() {
    for(i = 1; i < 4; i++){ //3 esercizi
      var testo = $('.text'+i).data('text');
      var righe = testo.split('/n');    //viene splittato il data
      $.each(righe, function(index, riga) { //ciclo per ogni riga
        $('.text'+i).append('<span class="terminal" style="display:block;" id="'+ index+ i + '"></span>');
        i = i.toString();
        var rigaID = index+i;
        var self = $(this);
          setTimeout(function () {
            //ogni riga
            $.each(self, function(index, carattere){
                setTimeout(function () { 
                  //ogni char
                  $("#"+rigaID).append("<span>"+carattere+"</span>");
                  //$('.classe-terminale').scrollTop($(document).height());
                }, index*30);
            });
          }, index*1200);
      });
    }
  }
  ```

- Funzione che controlla le risposte date agli esercizi
  
  ```javascript
  function checkA(corso, iCorso, iEsercizio){
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
    aggiornaProgressi(corso,iCorso, iEsercizio);
    return false;
  }
  ```

- Funzione che aggiorna i progressi dell' utente attraverso una barra progressi. (AJAX)
  
  ```javascript
  function aggiornaProgressi(corso,visualizza,i){
        $.get("../../sessionControl/sessionControl.php", function(data, status, xhr){
          username = data;
        });
  
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "../../server/aggiornaJson.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("user="+ username +"&corso=" + corso + "&visualizza="+ visualizza +"&i="+ i); 
  }
  ```

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
  
  ```javascript
  function inviaMess(){
      var soggetto = $(".btn-mess").attr("id");
  
      var mail = document.messForm.mail.value;
      var messaggio = document.messForm.messaggio.value;
      var nome = document.messForm.nome.value;
      var cognome = document.messForm.cognome.value;
  
      Email.send(
      "projectcoding@libero.it",      //E-MAIL DI SEND
      "projectcoding@libero.it",      //E-MAIL DI RICEZIONE
      "Inviato a: " + soggetto + ", Inviato da: " + mail + " " + nome + " " + cognome,
      messaggio,             //   Campo Messaggio da inviare
      "smtp.libero.it",
      "projectcoding@libero.it",
      "password"
    );     
    alert("Email inviata con successo");
  }
  ```

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
  
  ```javascript
  function controllo() {
      if ($(".testo1").css("display") == "block" ){
        $(".testo1").css("display","non);
        $(".testo2").css("display","inline");
        $("#meseanno").text("Mese");
      } else {
        $(".testo2").css("display","none");
        $(".testo1").css("display","inline");
        $("#meseanno").text("Anno");
      }
    }
  ```
