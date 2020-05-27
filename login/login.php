<?php
   
  
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      include("../config.php");
      $myusername = pg_escape_string($db,$_POST['username']);
      $mypassword = md5(pg_escape_string($db,$_POST['password']));

      $sql = "SELECT * FROM utente WHERE username = '{$myusername}' AND password = '{$mypassword}'";
      $result = pg_query($db,$sql) OR die("alert('aiuto');");
      $row = pg_fetch_array($result, null, PGSQL_ASSOC);
      $count = pg_num_rows($result);
      
      // Se i risultati corrispondono a $myusername e $mypassword, record trovato deve essere uguale a 1
      if($count == 1) {
        //Dentro la var globale SESSION, viene creato una var con value=myusername
        session_start();
        $_SESSION['username'] = $myusername;

        // Reindirizzamento a portate una volta effettuato il login
        header("Location: ../portale/portale.html");
      } else {
        $error = "Username o Password non valida!";
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
        <link href="../css/projectcode.css" rel="stylesheet" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
        <script type="text/javascript" lang="javascript" src="login.js"></script>
        <script src="sessionControl/sessionControl.js"></script>
        <!--
        <script src="../js/projectcode.js"></script> -->
        <title>Login</title>
    </head>

    <body>



      <!-- Navbar -->
      <div class="pc-container" >  <!-- <===== Colore di prova, importato per vedere la distinzione body e navbar-->    
              <!-- Navbar -->
              <div>
                  <div class="pc-row pt-3">
                      <div class="pc-col-left">
                          <div class="pc-site-header media">
                              <i class="fas fa-code fa-3x mt-1 pc-logo"></i>
                              <div class="media-body">
                                  <h1 class="pc-sitename">ProjectCode</h1>
                                  <p class="pc-slogon">Learn Faster Learn Better</p>
                              </div>        
                          </div>
                      </div>
                      <div class="pc-col-right">
                          <nav class="navbar navbar-expand-lg" id="pc-main-nav">
                              <button class="navbar-toggler toggler-example mr-0 ml-auto" type="button" 
                                  data-toggle="collapse" data-target="#navbar-nav" 
                                  aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                                  <span><i class="fas fa-stream"></i></span>
                              </button>
                              <div class="collapse navbar-collapse pc-nav" id="navbar-nav">
                                  <ul class="navbar-nav text-uppercase w-100 justify-content-around">
                                      <li class="nav-item ">
                                          <a class="nav-link pc-nav-link" href="../index.html">Home </a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="nav-link pc-nav-link" href="../portale/portale.html">Portale</a>
                                      </li>  
                                      <li class="nav-item">
                                          <a class="nav-link pc-nav-link" href="../negozio/negozio.html">Shop</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="nav-link pc-nav-link" href="../contact/contact.html">Contatti</a>
                                      </li>  
                                      <!-- navbar#Parte Destra-->                          
                                      <li class="nav-item dropdown">
                                          <button id="userZone_btn" data-toggle="dropdown" aria-expanded="false" class="dropdown-toggle text-uppercase pc-nav-link" style="background: none;border: none;"></button>
                                          <div class="dropdown-menu" id="" style="min-width:unset; text-align: center;">
                                              <span class='dropdown-item' id="userZone_0" style="padding:0;"></span>
                                              <span class='dropdown-item' id="userZone_1" style="padding:0; padding-top: 5px; "></span>
                                          </div>
                                      </li>
                                      </li>

                                  </ul>                            
                              </div>                        
                          </nav>
                      </div>
                  </div>
              </div>  
          </div> 


        <!-- LOGIN BOX-->
        <div class="login-box">
            <h2>Login</h2>
            <form method="POST" name="login" action="" id="login">
              <div class="user-box">
                <input type="text" name="username" required>
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