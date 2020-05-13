<?php
    session_start();
    if (isset($_SESSION['username']))        //Controlla se utente è loggato
        echo $_SESSION['username'];          //Ritorna lo USERNAME
?>
