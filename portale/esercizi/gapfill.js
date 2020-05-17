/*
* Funzione che inizializza la pagina:
* - imposta sotto ogni riga l'icona trasparente, che verrÃ  poi rimpiazzata da una spunta o una croce rispettivamente se la  risposta Ã¨ corretta o errata.
* - inizializza dinamicamente l'array delle domande e la pagina html
* - inizializza dinamicamente l'array delle risposte
*/

setUpPage();

/* scrittura body */
function setUpPage(){
	for(suindex = 0;suindex<questionArray.length;suindex++){
        /*  stampa numero esercizio */
        document.write("<div class='exercise_row'><span class='exercise_number'>" + (suindex+1) + " </span><span class='exercise_text'>");
        /*  stampa primo elemento array*/
        document.write(questionArray[suindex][0]);
        /* campo input */
        //<input size="20" name="ans1">
		document.write("</span><span class='exercise_gapfill'><input size=" + questionArray[suindex][3] + " name=ans" + (suindex+1) + "> </span><span class='exercise_text'>");
        /* stampa terzo elemento array */
        document.write(questionArray[suindex][2]);
        /* stampa immagine corretto o sbagliato */
        document.write("</span><span class='exercise_marking'><img src='images/transparent.png' name='im" + (suindex +1) + "'></span> </div>");
    }
    /* buttone di submit */
	document.write("<div class='exercise_buttons'><input onClick=checkScore() type=button value='Punteggio' name='button'> <input type=button value='Risposte' onClick='reveal()' name='button2'> <input type='reset' onClick='again()' name='reset' value='Ricomincia'></div>");
}

/* crea array di risposte */
var answerArray = new Array(document.esercizio.ans1,document.esercizio.ans2,document.esercizio.ans3,document.esercizio.ans4,document.esercizio.ans5,document.esercizio.ans6,document.esercizio.ans7,document.esercizio.ans8,document.esercizio.ans9,document.esercizio.ans10,document.esercizio.ans11,document.esercizio.ans12);
function checkScore() {
    var answerArray = new Array(document.esercizio.ans1,document.esercizio.ans2,document.esercizio.ans3,document.esercizio.ans4,document.esercizio.ans5,document.esercizio.ans6,document.esercizio.ans7,document.esercizio.ans8,document.esercizio.ans9,document.esercizio.ans10,document.esercizio.ans11,document.esercizio.ans12);
    var score = 0;
	for(csindex = 0;csindex<questionArray.length;csindex++){
		if (answerArray[csindex].value == questionArray[csindex][1]) {
			//inserire funzione o cambio stile se risposta corretta
			score++;
		} else {
			//inserire funzione o cambio stile se risposta sbagliata
		}
	}
	alert("Il tuo punteggio Ã¨ "+score+" / " + questionArray.length);
}

/* reset buttone */
function resetAns() {
var answerArray = new Array(document.esercizio.ans1,document.esercizio.ans2,document.esercizio.ans3,document.esercizio.ans4,document.esercizio.ans5,document.esercizio.ans6,document.esercizio.ans7,document.esercizio.ans8,document.esercizio.ans9,document.esercizio.ans10,document.esercizio.ans11,document.esercizio.ans12);
var imageArray = new Array(document.images.im1,document.images.im2,document.images.im3,document.images.im4,document.images.im5,document.images.im6,document.images.im7,document.images.im8,document.images.im9,document.images.im10,document.images.im11,document.images.im12);
	cheat = false;
	for(agindex = 0;agindex<questionArray.length;agindex++){
		answerArray[agindex].value = "";
		imageArray[agindex].src="images/transparent.png";
	}
}

