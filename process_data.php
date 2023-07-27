
<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chatbotfields";
$table = "";

// Establish database connection
$conn = new mysqli($servername, $username, $password, $dbname,$table);

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



    // Preparar la consulta SQL
    $sql = "INSERT INTO chatbotfields (nombre, correo, telefono) VALUES ('$nombre', '$correo', '$telefono')";

    if ($conn->query($sql) === TRUE) {
        echo "Datos guardados correctamente.";
    } else {
        echo "Error al guardar los datos: " . $conn->error;
    }

    // Close the database connection
    $conn->close();
} else {
    // If the form was not submitted via POST, return an error response
    $response = array("status" => "error", "message" => "Form data was not submitted");
    echo json_encode($response);
}
?>
