<?php
    if (isset($_POST['nome']) && isset($_POST['cognome']) && isset($_POST['inEmail']) && isset($_POST['password']) && isset($_POST ['username'])){       //   Controlla che i campi inviata dalla form esistano, e quindi si evitano accessi diretti dalla URL
        
        //  Dichiarazione Variabili
        include("../config.php");       // Collegamento al database
        $user = pg_escape_string($db,$_POST['username']);
        $nome = pg_escape_string($db,$_POST['nome']);
        $cognome = pg_escape_string($db,$_POST['cognome']);
        $email = pg_escape_string($db,$_POST['inEmail']);
        $pass = pg_escape_string($db,$_POST['password']);

        //  richiesta al database DB
        $query = "SELECT * FROM utente WHERE email = '{$email}' AND username = '{$user}' AND password = '{$pass}'";
        $result = pg_query($db, $query) or die('Query fallita '.pg_last_error());    //  Esegui query sul DB $dbcon
        if (!pg_num_rows($result)){     //  Check se non esiste già una row con i parametri inserti della form
            $inQuery = "INSERT INTO utente VALUES('{$nome}','{$cognome}','{$email}','{$pass}', '{$user}')";
            $result = pg_query($db, $inQuery) or die.('Query fallita '.pg_last_error());     // Esegue query di inserimento
            if ($result){

                // Registrazione avvenuta con successo

                //  Aggiunto utente per registrazione progressi
                $array = file_get_contents('../server/progressi.json');
 
            
                $array = json_decode($array, true);
              
                
               
                $array +=  [$user => ["java" => [
                    "corso0" => [0, 0, 0, 0],
                    "corso1" => [0, 0, 0, 0],
                    "corso2" => [0, 0, 0, 0],
                    "corso3" => [0, 0, 0, 0],
                    "corso4" => [0, 0, 0, 0],
                    "corso5" => [0, 0, 0, 0],
                    "corso6" => [0, 0, 0, 0]
                ],
                    "python" =>
                [
                    "corso0" => [0, 0, 0, 0],
                    "corso1" => [0, 0, 0, 0],
                    "corso2" => [0, 0, 0, 0],
                    "corso3" => [0, 0, 0, 0],
                    "corso4" => [0, 0, 0, 0],
                    "corso5" => [0, 0, 0, 0],
                    "corso6" => [0, 0, 0, 0]
                    ]
                ]
                ];
                //The end result.
                $array = json_encode($array);
                file_put_contents('../server/progressi.json', $array);    

                // Return invio con success
                echo 0;
            }else{

                // Registrazione fallita: problema connessione al database
                echo 'Errore registrazione';
            }
        } else {

            // Registrazione fallita: utente già registrato
            echo 'Utente già registrato';
        };                             
    } else {

        //  se si è acceduto al file register.php direttamente con la URL
        header("Location: register.html");   //  Redirect to "Pagina di Registrazione"
    }
?>