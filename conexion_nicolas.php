<?php
$servername = "localhost";
$username = "i6990943_wp2";
$password = "O.GuMxiINHveV6k78FM14";
$dbname = "i6990943_wp2";
$table = "ChatBotFields";


// Create connection
$con = new mysqli($servername, $username, $password, $dbname, $table);

// Check connection
if ($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}
echo "Connected successfully";
?>