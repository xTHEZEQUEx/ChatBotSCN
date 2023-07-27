<?php
// Database credentials
$servername = "localhost";
$username = "i6990943_wp2";
$password = "O.GuMxiINHveV6k78FM14";
$dbname = "i6990943_wp2";
$table = "ChatBotFields";

// Establish database connection
$conn = new mysqli($servername, $username, $password, $dbname,$table); //Quitar el table en dado caso

// Check connection
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the form data
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];

    // Prepare the SQL query (Note: Using prepared statements is recommended for security)
    $sql = "INSERT INTO $table (nombre, correo, telefono) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nombre, $correo, $telefono);

    if ($stmt->execute()) {
        echo "Datos guardados correctamente.";
    } else {
        echo "Error al guardar los datos: " . $conn->error;
    }

    // Close the prepared statement and the database connection
    $stmt->close();
    $conn->close();
} else {
    // If the form was not submitted via POST, return an error response
    $response = array("status" => "error", "message" => "Form data was not submitted");
    echo json_encode($response);
}
?>