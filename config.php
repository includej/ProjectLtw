<?php
   define('DB_SERVER', 'dumbo.db.elephantsql.com');
   define('DB_PORT','5432');
   define('DB_USERNAME', 'twhntwkl');
   define('DB_PASSWORD', '0p4dSj50HGblqFxoJ8hwY9aj2z7e6IjS');
   define('DB_DATABASE', 'twhntwkl');
   $db = pg_connect("host:{$DB_SERVER} port:{$DB_PORT} user:{$DB_USERNAME} password:{$DB_PASSWORD} dbname:{$DB_DATABASE}");
?>