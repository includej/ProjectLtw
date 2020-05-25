function creaStoria(corso){
    var anno = {"java": ["1992","1993","1995","2006","2007"],
                "python": ["1989", "1991" , "2000", "2008"],
                "ruby": ["1993","1996","1998","2005"],
                "scala": ["2001","2004","2006","2011"],
                "bash": ["1988","1989","2014","2019"],
                "javascript": ["1995","1996","1998","1999","2016"]
    }
    var storia = {"java": ["Nasce JAVA da un gruppo di esperti sviluppatori capitanati da James Gosling","con l'esplosione di internet che Java iniziò a farsi notare come strumento per iniziare a programmare per internet","Java viene annunciato ufficialmente il 23 maggio 1995 a SunWorld", "la Sun Microsystems distribuisce la sua implementazione del compilatore Java e della macchina virtuale sotto licenza GPL","Sun pubblica anche le librerie, tranne alcuni componenti non di sua proprietà, sotto licenza GPL, rendendo Java un linguaggio di programmazione la cui implementazione di riferimento è libera"],
                "python": ["Nasce Python concettualizzato da Guido van Rossum, membro del National Research Institute of Mathematics and Computer Science.","Viene rilasciata la versione 0.9 dove vengono incluse classi, liste e stringhe. Inoltre, vengono aggiunte lambda, map, filter e reduce", "Viene rilasciata la versione 2.0. Questa versione era un progetto open-source fatta dai membri del National Research Institute of Mathematics and Computer Science. Questa versione di Python includeva list comprehnsions, il garbage collectior, e il supporto di Unicode", "Viene rilasciata la versione 3.0. Uno dei cambiamenti più evidenti è stato il cambiamento dell'istruzione print con la funzione print()"],
                "ruby": ["Nasce Ruby, concepito da una discussione tra Yukihiro Matsumoto e un collega. Stavano discutendo della possibilità di un linguaggio di scripting orientato agli oggetti","Ruby 1.0 viene rilasciato a Dicembre, in Giappone","Matz crea una semplice Homepage in Inglese per Ruby. Ruby si sta iniziando a diffondere oltre il Giappone","Nasce Ruby on Rails, il framework che cambiò la storia del Web Development Rapido"],
                "scala": ["Martin Odersky iniziò a progettazione Scala, in Svizzera ed era un linguaggio di programmazione general purpose", "Viene rilasciata la versione 1.0","Viene rilasciata la versione 2.0","Il 12 maggio Odersky e i suoi collaboratori lanciano Typesafe Inc., una compagnia che fornisce supporto commerciale, training, e servizi per Scala. Typesafe ricevette un investimento da 3 milioni di dollori da Greylock Partners"],
                "bash": ["Brian Fox iniziò a scrivere codice su Bash dopo che Richard Stallman divenne insoddisfatto della mancanza di progressi da parte dello sviluppatore precedente. Stallman e la Free Software Foundation hanno considerato una shell libera in grado di eseguire script di shell esistenti così strategici per un sistema completamente libero costruito con codice BSD e GNU che che questo è stato uno dei pochi progetti finanziati da loro stessi.", "Fox rimase il principale manutentore fino a quando fu licenziato dalla FSF e la sua responsabilità fu trasferita a Chet Ramey", "Fu scoperta una falla di sicurezza risalente al 1989 e ha rapidamente portato a una serie di attacchi su Internet. Le patch per correggere i bug sono state rese disponibili subito dopo l'identificazione dei bug.", "Nel 2019 Bash è diventate la shell più popolare tra gli utenti Linux, diventando la shell interattiva predefinita sulle varie distribuzioni del sistema operativo."],
                "javascript": ["Netscape decide di aggiungere un linguaggio di scripting per rendere le pagine Web dinamiche. Netscape collabora con  Sun Microsystems per incorporare il linguaggio di programmazione Java","Javascript viene consegnata a un ente di linguaggio di scripting standar indternazionale chiamato ECMA (European Computer Manufacturers Association), che è responsabile dello sviluppo e della manutenzione di questo linguaggio.", "ECMAScript 2 viene rilasciato", "ECMAScript 3 viene rilasciato. Questa release si è evoluta in ciò che noi adesso chiamiamo JavaScript", "Il 92% di tutti i siti utilizza JavaScript. Include alcuni dei siti più grandi nel mondo, come Google e Facebook."]
    }

    $("#dynam").empty();
    caricaSfondo(corso,false);
    
    
    //  Parte iniziale
    $("#dynam").append(`
        <div class="storia" style="padding-right:20px; padding-bottom: 50px;">
            <div class="row" style="min-height: 100px; padding-top:50px; margin-bottom: 0;">
                <div class="col-6 colsx"></div>
            </div>
        </div>
    `);

    
    //  Parte Storia
    for(i=0; i < storia[corso].length; i++){
        if((i%2)== 0){
            $(".storia").append(`
            <!-- Prima row SX-->
            <div class="row storia-row" style="border-radius: 10px 10px 0 0; padding-top:0px;">
            
              <!-- container sinistra -->
              <div class="col-6 colsx" id="bordo-`+i+`">
                <div class="container-diapositiva-sx">

                  <!-- sezione scritta-->
                  <button class="fas fa-square fa-2x markdotsx"  onclick="mostraStoria('`+i+`')"></button>
                  <div class="container diapositivasx">

                    <span class="fas fa-caret-right fa-3x markarr"></span>

                    <!-- TITOLO -->
                    <h1>`+ anno[corso][i]+`</h1>

                    <!-- Parte scritta -->
                    <div id="testo`+i+`" style="display:none">`+ storia[corso][i]+`
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6"></div>
            </div>`);
        } else {
            $(".storia").append(`
            <!-- seconda row DX -->
            <div class="row storia-row">
              <div class="col-6 colsx" id="bordo-`+i+`"></div>
              <div class="col-6 coldx">
                <div class="container-diapositiva-dx">
                  <!-- sezione scritta -->
                  <button class="fas fa-square fa-2x markdot-dx" onclick="mostraStoria('`+i+`')"></button>
                  <div class="container diapositiva-dx">
                    <span class="fas fa-caret-left fa-3x markarr-dx"></span>
                    
                    <!-- TITOLO -->
                    <h1>`+ anno[corso][i]+`</h1>
                    
                    <!-- Parte scritta -->
                    <div id="testo`+i+`" style="display:none">`+ storia[corso][i]+`
                    </div>
                  </div>
                </div>
              </div>
            </div>`);
        }
    }
}