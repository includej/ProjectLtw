<?php
   include("../config.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = pg_escape_string($db,$_POST['username']);
      $mypassword = pg_escape_string($db,$_POST['password']); 
      
      $sql = "SELECT * FROM utente WHERE username = '$myusername' AND password = '$mypassword'";
      $result = pg_query($db,$sql) OR die("Query fallita".pg_last_error());
      $row = pg_fetch_array($result, null, PGSQL_ASSOC);
      //$active = $row['active']; Da testare
      
      $count = pg_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
         $_SESSION['login_user'] = $myusername;
         header("location: ../index.html");
      }else {
         $error = "Your Login Name or Password is invalid";
      }
   }
?>
<html lang="en">
    <head>
        <meta charset="uft-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" href="login.css" type="text/css">
        <link rel="stylesheet" href="../css/bootstrap.min.css" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" />
        <link href="../fontawesome/css/all.min.css" rel="stylesheet" /> 
        <link href="../css/templatemo-diagoona.css" rel="stylesheet" />
        <script src="../js/templatemo-script.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
        <script type="text/javascript" lang="javascript" src="login.js"></script>
        <title>Login</title>
    </head>

    <body>
      

        <!-- LOGIN BOX-->
        <div class="login-box">
            <h2>Login</h2>
            <form method="POST" name="login" action="" id="login" onsubmit="return Submit();">
              <div class="user-box">
                <input type="text" name="utente" required>
                <label>Username</label>
              </div>
              <div class="user-box">
                <input type="password" name="password" id="password" required>
                <label>Password</label>
              </div>
              <div style="color: white;">
                  <input type="checkbox" id="show" name="show">
                  Mostra Password
              </div>
              <div class="dimenticata">
                <a href="dimenticata.html">Hai dimenticato la password?</a>
              </div>
              <div class="error-login">
                <label id="error" >username e/o password errata!</label>
              </div>
              <div  class="submit-btn">
                <input type="submit" >
              </div>
              <!--<a href="#" id="submit" onclick="submit()">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a> -->
            </form>
          </div>

          <!-- Testing -->
</html>