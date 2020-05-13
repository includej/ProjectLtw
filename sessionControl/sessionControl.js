$(document).ready(function(){
    $.ajax("/sessionControl/sessionControl.php", {      //Richiesta AJAX
        type:'POST',
        success: function(data, status, XHR){           //In caso di richiesta SUCCESSFULL
            if (!data){
                //Caso in cui utente non è loggato, mostra bottoni di login e register         
                $("#dynamicZone").html("<div><a href='/login/login.php' class='btn btn-outline-light'>Login<span class='fas fa-sign-in-alt'></span></a><a href='/register/register.html' class='btn btn-outline-light'>Register<span class='fas fa-user-plus'></span></a></div>");
            } else {
                //caso in cui utente loggato, mostra Welcome+username
                var str = "Welcome " + data;
                $("#dynamicZone").html(str);
            }
        },
    });
});