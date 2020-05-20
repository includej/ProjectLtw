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
    console.log("1");
    $("#dejan").fadeOut(500);
    $("#marco").fadeOut(500);
    $("#christian").fadeOut(500);
    setTimeout(function(){
        $("#"+nome).fadeIn("slow");
        $("#divMess").fadeToggle("slow");
        cambiaId(nome);
    }, 550);
}