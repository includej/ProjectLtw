<?php
   define('DB_SERVER', 'dumbo.db.elephantsql.com');
   define('DB_PORT', 5432);
   define('DB_USERNAME', 'twhntwkl');
   define('DB_PASSWORD', '0p4dSj50HGblqFxoJ8hwY9aj2z7e6IjS');
   define('DB_DATABASE', 'twhntwkl');
   $db = pg_connect("host=dumbo.db.elephantsql.com dbname=twhntwkl port=5432 user=twhntwkl password=0p4dSj50HGblqFxoJ8hwY9aj2z7e6IjS") or die("Server connection failure".pg_last_error());
?>