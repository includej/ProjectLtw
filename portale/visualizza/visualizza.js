function caricaLezione(corso, i, icorso){
    $("#dynam").empty();
    $("#dynam").append(`
      
        <button  class="btn btn-dark btn-responsive" onclick="caricaVisualizza('` + corso + `', '` + icorso + `');" style="margin-bottom: 20px; border-radius: 100px; transition: 0.5s;"><i class="fas fa-long-arrow-alt-left"></i> Torna indietro </button>
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
   
    $("#dynam").append(`
    <!-- bottone per tornare indietro -->
    <button  class="btn btn-dark btn-responsive" onclick="caricaVisualizza('` + corso + `', '` + icorso + `');caricaSfondo('`+corso+`',false)" style="margin-bottom: 0px; border-radius: 100px; transition: 0.5s;"><i class="fas fa-long-arrow-alt-left"></i> Torna indietro </button>
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
                    <p class="text1 classe-terminale1 terminale" data-text="1: class Esercizio1{/n2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public static void main(String args[]){/n3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String str = 'Hello World!';/n4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______(str); /n5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}/n6:}"></p>
                </div>

                <!-- colonna vuota (per spazio centrale) -->
                <div class="col-md-1 col-sm-2" > </div>

                <!-- zona Esercizio -->
                <div class="col-md-4 col-sm-8 divComp" >

                    <!-- testo -->
                    <h4> Con che funzione si stampa il valore della stringa str?  </h4>

                    <!-- parte input -->
                    <input id="risposta1" class="inRisp" data-text="println"></input>

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
                    <p class="text2 classe-terminale2 terminale" data-text="1: class Esercizio2{/n2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public static void main(String args[]){/n3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___(int i = 0; i < 3; i++){/n4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;println(i);/n5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}/n6:}"></p>
                </div>

                <!-- colonna vuota (per spazio centrale) -->
                <div class="col-md-1 col-sm-2" > </div>

                <!-- zona Esercizio-->
                <div class="col-md-4 col-sm-8 divComp" >

                    <!-- testo -->
                    <h4> Qual è il tipo di ciclo corretto? </h4>

                    <!-- parte input -->
                    <input id="risposta2" class="inRisp" data-text="for"></input>

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
                    <p class="text3 classe-terminale3 terminale" data-text="1: class Esercizio3{/n2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public static void main(String args[]){/n3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String str= ''ProjectCode'';/n4:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(''The size of the String is: '' + str.length());/n5:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}/n6:}"></p>
                </div>

                <!-- colonna vuota (per spazio) -->
                <div class="col-md-1 col-sm-2" > </div>

                <!-- zona Esercizio-->
                <div class="col-md-4 col-sm-8 divComp" >

                    <!-- testo -->
                    <h4> Cosa restituisce "str.length"? </h4>

                    <!-- parte input -->
                    <input id="risposta3" class="inRisp" data-text="11"></input>

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