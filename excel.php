<?php
require 'conexion_nicolas.php'; //Cambiar el nombre de este archivo
$query= mysqli_query($con, "SELECT * FROM consulta");
$docu= "detalles.xls";
header('Content-type: application/vnd.ms-excel');
header('Content-Disposition: attachment; filename='.$docu);
header('Pragma: no-cache');
header('Expires: 0');
echo '<table border=1>';
echo '<tr>';
echo '<th colspan=3>Usuarios registrados en chatbor</th>';
echo '<tr>';
echo '<tr><th>Nombre</th><th>Correo</th><th>Teléfono</th></tr>';
while($row=mysqli_fetch_array($query)){
    echo '<tr>';
    echo '<td>'.$row['nombre'].'</td>';
    echo '<td>'.$row['correo'].'</td>';
    echo '<td>'.$row['telefono'].'</td>';
    echo '</tr>';

}
echo '</table>';
?>