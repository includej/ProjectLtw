<?php
   include('../config.php');
   session_start();
   
   $user_check = $_SESSION['login_user'];
   
   $ses_sql = pg_query($db,"SELECT username FROM utente WHERE username = '$user_check' ");
   
   $row = pg_fetch_array($ses_sql, null, PGSQL_ASSOC);
   
   $login_session = $row['username']; 
   
   if(!isset($_SESSION['login_user'])){
      header("Location:login.php");
      die();
   }
?>