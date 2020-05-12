<html>
    <head></head>
    <body>
        <?php
            if (isset($_POST['nome']) && isset($_POST['cognome']) && isset($_POST['inEmail']) && isset($_POST['password'])){       //   Controlla che i campi inviata dalla form esistano, e quindi si evitano accessi diretti dalla URL
                //  Dichiarazione Variabili
                include("../config.php");
                $user = $_POST['Username'];
                $nome = $_POST['nome'];
                $cognome = $_POST['cognome'];
                $email = $_POST['inEmail'];
                $pass = $_POST['password'];

                //  Parte DB
            $query = "SELECT * FROM utente WHERE nome = '{$nome}' AND cognome = '{$cognome}' AND email = '{$email}' AND password = '{$pass}' AND username = '{$user}'";
                $result = pg_query($db,$query) or die('Query fallita '.pg_last_error());    //  Esegui query sul DB $dbconn

                if (!pg_num_rows($result)){     //  Check se non esiste già una row con i parametri inserti della form
                    $inQuery = "INSERT INTO utente VALUES('{$nome}','{$cognome}','{$email}','{$pass}')";
                    $result = pg_query($db, $inQuery) or die.('Query fallita '.pg_last_error());     // Esegue query di inserimento
                    if ($result){
                        /* TO DO quando inserimento va a buon fine  */
                        echo 'Registrazione eseguita';
                    }else{
                        /* TO DO quando inserimento non va a buon fine, raro    */ 
                        echo "errore inserimento";
                    }
                } else {        //  Se esiste già una row con i parametri inseriti ...
                    /* TODO quando esiste già l'utente  */
                    echo 'Utente gia registrato';
                };                             
            } else {        //  se si è acceduto al file register.php direttamente con la URL
                header("Location: register.html");   //  Redirect to "Pagina di Registrazione"
            }
        ?>
    </body>
</html>