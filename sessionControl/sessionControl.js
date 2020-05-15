$(document).ready(function(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = gestisciResponse;
    httpRequest.open("POST","/sessionControl/sessionControl.php");
    httpRequest.send();

    function gestisciResponse(e) {
            if (e.target.readyState == XMLHttpRequest.DONE && e.target.status == 200) {
                if (e.target.responseText){
                    var str = e.target.responseText;
                    $("#userZone_btn").html(str);
                    $("#userZone_0").html("<a href='/login/logout.php' style='padding: 5px 3px 5px 3px'>Logout <span class='fas fa-sign-out-alt'></span></a>");
                    $("#userZone_2").html("Welcome " + str);
                } else {
                    $("#userZone_btn").html("LOGIN");
                    $("#userZone_a").html("<a href='/login/login.php' style='padding: 5px 3px 5px 3px'>Login<span class='fas fa-sign-in-alt'>  </span></a><a href='/register/register.html' class='dropdown-item' style='padding: 5px 3px 5px 3px'>Register<span class='fas fa-user-plus'>  </span></a>");
                    /*$("#userZone_1").html("<a href='/register/register.html' class='btn btn-outline-light'>Register<span class='fas fa-user-plus'>  </span></a>");*/
                    $("#userZone_0").html("<a href='/login/login.php' style='padding: 5px 3px 5px 3px'>Login<span class='fas fa-sign-in-alt'>  </span></a>");
                    $("#userZone_1").html("<a href='/register/register.html' style='padding: 5px 3px 5px 3px'>Register<span class='fas fa-user-plus'>  </span></a>");
                }
        }
    }
});