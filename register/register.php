<html>
    <head></head>
    <body>
        <?php
            if (isset($_POST['nome']) && isset($_POST['cognome']) && isset($_POST['inEmail']) && isset($_POST['password'])){       //   Controlla che i campi inviata dalla form esistano, e quindi si evitano accessi diretti dalla URL
                //  Dichiarazione Variabili
                $nome = $_POST['nome'];
                $cognome = $_POST['cognome'];
                $email = $_POST['inEmail'];
                $pass = $_POST['password'];

                //  Parte DB
                $query = "SELECT * FROM /*tableName*/ WHERE /*attr*/ = '{$nome}' AND /*attr*/ = '{$cognome}' AND /*attr*/ = '{$email}' AND /*attr*/ = '{$pass}'";
                $dbconn = pg_connect("host=/*ADDRESS*/ port=/*PORT*/ dbname=/*DBName*/ user=/*USERDB*/ password=/*PASSDB*/") or die('Connessione non riuscita: ' . pg_last_error());    //Connessione con DB 
                $result = pg_query($query) or die('Query fallita '.pg_last_error());    //  Esegui query sul DB $dbconn

                if (!pg_num_rows($result)){     //  Check se non esiste già una row con i parametri inserti della form
                    $inQuery = "INSERT INTO /*tableName*/ VALUES('{$nome}','{$cognome}','{$email}','{$pass}')";
                    $result = pg_query($inQuery) or die.('Query fallita '.pg_last_error());     // Esegue query di inserimento
                    if ($result){
                        /* TO DO quando inserimento va a buon fine  */
                        //echo '<br>Info  registraione nome: '.$nome.'<br>Cognome: '.$cognome.'<br>Email: '.$email.'<br>Pass: '.$pass; 
                    }else{
                        /* TO DO quando inserimento non va a buon fine, raro    */ 
                        //echo "errore inserimento";
                    }
                } else {        //  Se esiste già una row con i parametri inseriti ...
                    /* TODO quando esiste già l'utente  */
                    //echo 'Utente gia registrato';
                };                             
            } else {        //  se si è acceduto al file register.php direttamente con la URL
                header("Location: register.html");      //  Redirect to "Pagina di Registrazione"
            }
        ?>
    </body>
</html>