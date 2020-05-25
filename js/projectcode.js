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