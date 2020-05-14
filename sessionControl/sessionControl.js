$(document).ready(function(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = gestisciResponse;
    httpRequest.open("POST","/sessionControl/sessionControl.php");
    httpRequest.send();

    function gestisciResponse(e) {
            if (e.target.readyState == XMLHttpRequest.DONE && e.target.status == 200) {
                if (e.target.responseText){
                    alert("Entering");
                    var str = "Welcome " + e.target.responseText;
                    $("#dynamicZone").html(str);
                } else {
                    alert("Entering2");
                    $("#dynamicZone").html("<div><a href='/login/login.php' class='btn btn-outline-light'>Login<span class='fas fa-sign-in-alt'></span></a><a href='/register/register.html' class='btn btn-outline-light'>Register<span class='fas fa-user-plus'></span></a></div>");
                }
        }
    }
});