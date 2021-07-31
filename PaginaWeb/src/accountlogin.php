<?php
//require_once 'databaseconnect.php';

#VARIABLES
//RECIBIR VARIABLES
$recibirjson = json_decode(file_get_contents('php://input'), true);
$correocon = $recibirjson['correocon'];
$contracon = $recibirjson['contracon'];

//VARIABLES LOCALES
$usuario = "profe";

//CONSULTAS
$Nom_temp = $recibirjson['correocon'];
$Permiso_temp = $recibirjson['contracon'];


//DEVOLVER VARIABLES
$RespuestaCon = [
    "Con_usuario" => $usuario,
];
echo json_encode($RespuestaCon);


