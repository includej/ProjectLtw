/*  Carica Corsi    */

function caricaCorsi(corso){
$("#dynam").empty();
for(i=0;i<6;i++){
    var nome_corso= "Corso "+i;
    if (i== 0){
        nome_corso= "Introduzione";
    }
    $("#dynam").append(
        
`<div>
 <a href="#" class="link-corso" onclick="caricaVisualizza('`+ corso + `','` + i + `');">
     <div id="contenitore-foto" class="container-fluid">
         <img src="`+ corso + `.jpg" class="img-fluid" style="max-width: 80%; height: auto;">
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
}


/*  Carica Visualizza   */

function caricaVisualizza(corso,i){
    $("#dynam").empty();
    
    //  Append Intro

    $("#dynam").append(`<div class="visualizza-`+i+`-`+ corso + `">

    <!-- Bottone per tornare a pagina precedente -->
    <button  class="btn btn-dark btn-responsive" onclick="caricaPagina('lezioni-`+ corso + `','corsi');setTimeout(function(){progressiCorsi('`+ corso + `')},)" style="margin-bottom: 10px; border-radius: 100px; transition: 0.5s;"><i class="fas fa-long-arrow-alt-left"></i> Torna indietro </button>
    
    <!-- Contenitore principale-->
    <div class="contenitore-visualizza" style="height: auto;">
        <div id="contenitore-foto" class="container-fluid">
            <img src="`+ corso + `.jpg" class="img-fluid" style="max-width: 80%; height: auto;">
            <div class="divIntro">
                <h1 id="testo_`+ corso + `">Introduzione</h1>
            </div>
            <!--div  style="font-family: 'Poppins'; position: absolute; left: 440px; top: 165px; width: calc(100% - 520px);"-->
            <div class="divAttiv">
                <h6 id="testo_`+ corso + `">4 Activities</h6>
            </div>

            <span class="fa-stack fa-2x divNumb">
                <i class="fa fa-circle-notch fa-stack-2x"></i>
                <strong class="fa-stack-1x">`+i+`</strong>
            </span>
            <!--div class="progress barra-progressi"-->
            <div class="progress divProg">
                <div class="progress progress-bar progress-bar-success bg-success" id= "`+ corso + `-corso`+i+`-barra">
                    50% Completato
                </div>
            </div>
        </div>

        <div style="margin-left: 30px;">
            Start learning programming! Learn how to say "porta" too
        </div>

        <div class="container-fluid contenitore-gen" id="contenitore-visualizza">`);

    //  Append lezioni + esercizi
    var ind = 1;
    for(i2=1;i2<4;i2+=2){
        
            
        $("#contenitore-visualizza").append(`  
            <div class="row" style="background-color:  whitesmoke; margin-bottom: 0; height: 70px;">
                <a class="col-sm-12 corso-link" id="`+ corso + `-corso`+i+`-`+(i2-1)+`" href="#" onclick="caricaPagina('video-`+corso+`-`+i+(i2-1)+`,'visualizza');aggiornaProgressi('`+ corso + `','corso'`+i+`,`+(i2-1)+`)"> 
                    <img src="`+ corso + `.jpg" class="col-sm-1" style="max-width:8%; min-width: 100px; min-height: auto;">
                Lezione `+ ind +`
                </a>
            </div>

            <div class="row" style="background-color:  whitesmoke; margin-bottom: 0; height: 70px; ">
                <a class="col-sm-12 corso-link" id="java-corso`+i+`-`+i2+`" href="#" onclick="caricaPagina('esercizio-java-`+i+i2+`','esercizi');setTimeout(function(){terminale()},200);">
                    <img src="java.jpg" class="col-sm-1" style="max-width:8%;min-width: 100px; height: auto;">
                    Esercizio `+ ind +`
                </a>
            </div>`);
            ind++;
    };
    progressiEsercizi(corso , `corso` + i );    
}