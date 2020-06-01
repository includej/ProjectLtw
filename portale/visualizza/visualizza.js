function caricaLezione(corso, i, icorso){
    $("#dynam").empty();
    $("#dynam").append(`
      
        <button  class="btn btn-dark btn-responsive" onclick="caricaCorso('` + corso + `', '` + icorso + `');" style="margin-bottom: 20px; border-radius: 100px; transition: 0.5s;"><i class="fas fa-long-arrow-alt-left"></i> Torna indietro </button>
        <div class="embed-responsive embed-responsive-16by9" style="padding-top: 30px;">
            <iframe src="` + caricaVideo(corso, (i+(icorso*2))) + `" frameborder="0" style="margin-left: 10%; max-width: 80%; max-height:80%; border-radius: 25px;"></iframe>    
            <button class="btn btn-success btn-responsive" onclick="/*Insert to do*/" style="border-radius: 50px; margin-left:44%; max-width: 30%; max-height: 5%; box-sizing: border-box;">
                <span class="fas fa-pencil-alt" style="margin-right: 10px"></span>
                <strong>Esercizi</strong>
            </button>`);        
}

function caricaEsercizi(corso, icorso, iesercizio){
    $("#dynam").empty();
    caricaSfondo('black',true);
    
    var esercizi = {
        java: ["1: class Esercizio1{/n2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public static void main(String args[]){/n3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String str = 'Hello World!';/n4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______(str); /n5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}/n6:}", "1: class Esercizio2{/n2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public static void main(String args[]){/n3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___(int i = 0; i < 3; i++){/n4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;println(i);/n5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}/n6:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}/n7:}", "1: class Esercizio3{/n2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public static void main(String args[]){/n3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String str= ''ProjectCode'';/n4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(''The size of the String is: '' + str.length());/n5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}/n6:}"],
        python: ["1: def stampaStringa(str):/n2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____(str)/n3:return 0","1:lista_interi = [0,4,2,67,9]/n2:maxInLista(lista_interi)/n3:def maxInLista(lista_interi):/n4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;massimo = ___(lista_interi)/n5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return(massimo)","1:def sommatrice(lista):/n2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;risultato = 0/n3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___ numero in lista:/n4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;risultato += numero/n5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Il risultato della somma è... ' + str(risultato))"],
        ruby: ["1: def multiple_string(str, n) /n2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return str*n /n 3: end /n4: /n5: print multiple_string('a', 7)","1: def in2030(a, b)/n2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ((a >= 20 && a <= 30) || (b >= 20 && b <= 30));/n3:end/n4:/n5:print in2030(15, 99)","1:x,y,z = 2,5,4/n2:if x >= y and x >= z/n3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;puts 'x = #{x}'/n4:elsif y >= z and y >= x /n5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;puts 'y = #{y}'/n6:else /n7:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;puts 'z = #{z}'/n8:end"],
        scala: ["1:val str = 'allaboutscala'/n2:val charToFind = str.charAt(7)/n3:_______(s'The 8th character literal in $str = $charToFind')", "1:val strToFormat = 'allaboutscala'/n2:val toUpperCase = strToFormat.___________()/n3:println(s'$strToFormat in caratteri maiuscoli = $reversedAndToUpperCase')","1:import scala.io.StdIn._/n2:val nome = readLine('Inserisci Nome: ')/n3:println('Inserisci Anno: ')/n4:val anno = _______()/n5:print('Nome: ')/n6:println(nome)/n7:print('Anno: ')/n8:println(anno)/n"],
        javascript: ["1:function maggiore(x)/n2:{/n3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  if (x > 0) /n4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {/n5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    return true;/n6:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  }/n7:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  else /n8:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {/n9:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    return false;/n10:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  }/n11:}","1:function incremento(val){/n2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var risultato = 0;/n3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___ (i=0; i < val; i++){/n4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;risultato++;/n5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}/n6:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return risultato;/n7:}","1:    var array = ['uno','due','tre'];/n2:    function estrazione(x){/n3:    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return array[x];/n4:    };"],
        bash: ["1: #!/bin/bash/n2: stringa='stampa'/n3: _____ “$stringa”","1: #!/bin/bash/n2: S1='string'/n3: S2='String'/n4: if [[ $S1!=$S2 ]]/n5: ____/n6:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; echo “$S1 non uguale a $S2”/n7: fi",'1: #!/bin/bash/n2: for n in 1 2 3 4/n3: do/n4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo “valore di n = $n”/n5: ____'] 
    };
    
    var soluzioni = {
        java: ["println","for","11"],
        python: ["print","max","for"],
        ruby: ["7","false","y = 5"],
        scala: ["println","toUpperCase","readInt"],
        javascript: ["true","for","tre"], 
        bash: ["echo","then","done"]
    };

    var domande = {
        java: ["Con che funzione si stampa il valore della stringa str?","Qual è il tipo di ciclo corretto?", "Cosa restituisce str.length?"],
        python: ["Con che funzione si per stampare la stringa?","Quale funzione si restituisce in output il massimo valore in una lista?","Quale tipo di ciclo va utilizzato per il corretto funzionamento?"],
        ruby: ["Quante volte viene stampato il carattere 'a'?","Che valore restituisce la funzione? (True o False)","Cosa viene stampato?"],
        scala: ["Con che funzione si stampa in Scala?","Con quale funzione i caratteri della stringa vengono trasformati tutti in maiuscolo?","Con quale funzione viene preso in input l'anno?"],
        javascript: ["Se x è uguale a 10 cosa restituisce la funzione?","Quale tipo di ciclo va utilizzato?","Se x è uguale a 2 cosa restituisce la funzione?"], 
        bash: ["Con che funzione si stampa il valore della stringa?","Quale keyword bisogna utilizzare per indicare l'inizio dello statement in questo caso?","Quale keyword bisogna utilizzare per indicare la fine dello statement in questo caso?"]
    };

    $("#dynam").append(`
    <!-- bottone per tornare indietro -->
    <button  class="btn btn-dark btn-responsive" onclick="caricaCorso('` + corso + `', '` + icorso + `');caricaSfondo('`+corso+`',false)" style="margin-bottom: 0px; border-radius: 100px; transition: 0.5s;"><i class="fas fa-long-arrow-alt-left"></i> Torna indietro </button>
    <form method="POST">
        <!-- container esercizi -->
        <div class="container-fluid" style="margin-top: 30px">

            <!-- PRIMO ESERCIZIO-->

            <!-- Label esercizio -->
            <div class="row" style="margin: 0; height: auto;">
                <div class="col-1"></div>
                <div class="col-10">Esercizio 1</div>
                <div class="col-1"></div>
            </div>

            <!-- Zona terminale + esercizio -->
            <div class="row">

                <!-- colonna vuota (per spazio sinistra)-->
                <div class="col-md-1 col-sm-2"></div>

                <!-- terminale -->
                <div class="col-md-5 col-sm-10" style="border: 2px solid white; border-radius: 0px;">                
                    <p class="text1 classe-terminale1 terminale" data-text="` + esercizi[corso][0] + `"></p>
                </div>

                <!-- colonna vuota (per spazio centrale) -->
                <div class="col-md-1 col-sm-2" > </div>

                <!-- zona Esercizio -->
                <div class="col-md-4 col-sm-8 divComp" >

                    <!-- testo -->
                    <h4> ` + domande[corso][0] + `  </h4>

                    <!-- parte input -->
                    <input id="risposta1" class="inRisp" data-text="` + soluzioni[corso][0] + `"></input>

                    <!-- parte dinamica -->
                    <div id="variabile1" class="text-center divRisp"></div>                
                </div>

                <!-- Colonna vuosta (per spazio destra)-->
                <div class="col-md-1 col-sm-2" ></div>

            </div>




            <!-- SECONDO ESERICIZIO -->

            <!-- Label esercizio -->
            <div class="row" style="margin: 0; height: auto;">
                <div class="col-1"></div>
                <div class="col-10">Esercizio 2</div>
                <div class="col-1"></div>
            </div>

            <!-- Zona terminale + esercizio -->
            <div class="row">

                <!-- colonna vuota (per spazio sinistra)-->
                <div class="col-md-1 col-sm-2"></div>

                <!-- terminale -->
                <div class="col-md-5 col-sm-10" style="border: 2px solid white; border-radius: 0px;">                
                    <p class="text2 classe-terminale2 terminale" data-text="` + esercizi[corso][1] + `"></p>
                </div>

                <!-- colonna vuota (per spazio centrale) -->
                <div class="col-md-1 col-sm-2" > </div>

                <!-- zona Esercizio-->
                <div class="col-md-4 col-sm-8 divComp" >

                    <!-- testo -->
                    <h4> ` + domande[corso][1] + ` </h4>

                    <!-- parte input -->
                    <input id="risposta2" class="inRisp" data-text="` + soluzioni[corso][1] + `"></input>

                    <!-- parte dinamica -->
                    <div id="variabile2" class="text-center divRisp"></div>                
                </div>

                <!-- Colonna vuosta (per spazio destra)-->
                <div class="col-md-1 col-sm-2" ></div>

            </div>


            <!-- TERZO ESERCIZIO -->

            <!-- Label esercizio -->
            <div class="row" style="margin: 0; height: auto;">
                <div class="col-1"></div>
                <div class="col-10">Esercizio 3</div>
                <div class="col-1"></div>
            </div>

            <!-- Zona terminale + esercizio -->
            <div class="row">

                <!-- colonna vuota (per spazio sinistra)-->
                <div class="col-md-1 col-sm-2"></div>

                <!-- terminale -->
                <div class="col-md-5 col-sm-10" style="border: 2px solid white; border-radius: 0px;">                
                    <p class="text3 classe-terminale3 terminale" data-text="` + esercizi[corso][2] + `"></p>
                </div>

                <!-- colonna vuota (per spazio) -->
                <div class="col-md-1 col-sm-2" > </div>

                <!-- zona Esercizio-->
                <div class="col-md-4 col-sm-8 divComp" >

                    <!-- testo -->
                    <h4> ` + domande[corso][2] + ` </h4>

                    <!-- parte input -->
                    <input id="risposta3" class="inRisp" data-text="` + soluzioni[corso][2] + `"></input>

                    <!-- parte dinamica -->
                    <div id="variabile3" class="text-center divRisp"></div>

                </div>

                <!-- Colonna vuota (per spazio destra)-->
                <div class="col-md-1 col-sm-2" ></div>
            </div>
        
            <!-- bottone per il check-->
            <div class="row" style="margin: 0; height: auto;">
                <div class="col-md-5 col-sm-1"></div>
                <div class="col-md-2 col-sm-10">
                    <button onclick="return checkA('` + corso + `','corso` + icorso + `',` + iesercizio + `)"  class="btn btn-dark btn-responsive" id="btn-form" style="min-width: 80%; margin-bottom: 0px; border-radius: 100px; transition: 0.5s;" value="INVIA">Check</button>
                </div>
                <div class="col-md-5 col-sm-1"></div>
            </div>
        </div>
    </form>
    `);
    terminale();
}

function caricaVideo(corso, i){
    var lezioni = { java:["et64T6ueCbA","tlBEfMeLQZk","62MFe8IuK_4","JzsejdWEWbk","uiV6rVGXJ1E","m7Ms3oA59Rs","VZPnXg9LQ50","60WqrrFwOlY","8Mgd1FyVOHY","npQcwCtXC7M","p48_Mg9YPPc","XNgPmXkRi30","88JQYFAikdE","y3juvABKUYw"],
                    python:["7HS_XYUYsm0","t81EsDXrB3Q","PzkEjTFTsdo","XJKYXe_SaTI","6dpBOSksDnI","dHtCmgatZV0","IvnI9yBrPW4","k7m5bqHg0Ws","HwED2r-amZE","LuzmpdZsyWk","MC7pejaVf8E","Ew6_sOYgw","pUn5m6N3D4s","Ewd7wp5UU1A"],
                    ruby:["iG67T_TV9N0","cpUjQ13ILtU","_RBF-o6ouI0","WEfA79Xw06k","5Zdf2C87oVA","spHaZ3bdI7U","4LpARTmsKVs","wWZGxLYQLA4","CTXh81kiQZQ","Ne6O2viFT1w","zStM4SJ94Q0","pr3gG6NO2cg","f7aheb_P9V0","StT4jmTb-7E"],
                    scala:["LQVDJtfpQU0","GD4qyXACuTc","haMI6uoMKs0","uYcSYCGITeU","OKiwZFMgnEk","6xRsw_6fc18","wvsxOedxQRo","u0FLmrnAm5k","_tLEX80p5-k","JYDhVgKfauk","LzL9EPrwGZA","flfARstLqmc","GuGRsmuczWU","Tadg1OVTH5E"],
                    bash:["FjwVt9L8xjs","avlepnr5XWQ","vM4U5Ul7W80","aipK0fWS8pQ","wNOw1L2ZfRs","u9jjD1c8ATM","4W7EFxkkzFg","HZwhnRDPRLE","Mb5gLVu7_Gk","y4SNya41awE","ZRKH4KwRZH8","5MsSfXVWtOA","gS0L8TzlQdM","WyOWSfuLPmY"],
                    javascript:["qoSksQ4s_hg","VB7y0yxZjro","VB7y0yxZjro","czlwRUeTCgw","czlwRUeTCgw","QLatPwsbDrQ","u0Mq3FzpsmI","_MC0Gw07w8M","Z1eV0RBRam0","tH-q9QFNUdA","B4ZCFdrBmbE","Lp-Du2fKoug","1v1Bk3Q02Sc","LjGaaWX_NbE"]};
    return "https://www.youtube.com/embed/"+lezioni[corso][i]+"?autoplay=1";
}