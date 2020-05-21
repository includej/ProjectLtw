function inviaMess(){
    var soggetto = $(".btn-mess").attr("id");
    alert("ciao");
    var mail = document.messForm.mail.value;
    var messaggio = document.messForm.messaggio.value;
    var nome = document.messForm.nome.value;
    var cognome = document.messForm.cognome.value;
    alert(soggetto + " " + mail + " " + nome + " " + cognome);
    Email.send(
        "projectcoding@libero.it",      //E-MAIL DI SEND
        "projectcoding@libero.it",      //E-MAIL DI RICEZIONE
        soggetto + " " + mail + " " + nome + " " + cognome,
        messaggio,             //   Campo Messaggio da inviare
        "smtp.libero.it",
        "projectcoding@libero.it",
        "Porto2020@"
      );     
}


function cambiaId(nome){
    $(".btn-mess").attr("id",nome);
};

function cambiaDisplay(nome){
    fadeOutAll();
    setTimeout(function(){
        $("#"+nome).fadeIn(300);
        $("#divMess").fadeIn(300);
        cambiaId(nome);
    }, 350);
}

function diplayOriginale(){
    fadeOutAll();

    setTimeout(function(){
        $("#dejan").fadeIn(300);
        $("#marco").fadeIn(300);
        $("#christian").fadeIn(300);
    }, 350);
}

function fadeOutAll(){    
    $("#dejan").fadeOut(300);
    $("#marco").fadeOut(300);
    $("#christian").fadeOut(300);
    $("#divMess").fadeOut(300);
}