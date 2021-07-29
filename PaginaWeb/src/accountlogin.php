<?php
require_once 'databaseconnect.php';

$Recibido = json_decode(file_get_contents('php://input'), true);

$correo = $Recibido['correo'];
$contra = $Recibido['contra'];

echo "Tu correo es" .$correo . "Tu contraseña es" .$contra;

/*$RespuestaCon = [

    "Con_Nombre" => $Nom_temp,

    "Con_Permiso" => $Permiso_temp,

    "Con_Causa" => $Causa_temp

];




echo json_encode($RespuestaCon);*/

