<?php

// Dichiarazione variabili
$user = $_POST["user"];
$corso = $_POST["corso"];
$visualizza = $_POST["visualizza"];
$i = $_POST["i"];

// Prende il file JSON
$data = file_get_contents('progressi.json');

// Da formato JSON -> Array
$json_arr = json_decode($data, true);


// Update
$json_arr[$user][$corso][$visualizza][$i] = 1;

// Formato Array->JSON + insert into JSON
file_put_contents('results_new.json', json_encode($json_arr));
?>