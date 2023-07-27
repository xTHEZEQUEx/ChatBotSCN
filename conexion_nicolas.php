<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chatbotfields";
$table = "";


// Create connection
$con = new mysqli($servername, $username, $password, $dbname, $table);

// Check connection
if ($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}
echo "Connected successfully";
?>