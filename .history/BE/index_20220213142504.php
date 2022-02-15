<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
$host = "localhost"
$user = "root"
$password=""
$dbname="databaseobs"
$con



$_POST = json_decode(file_get_contents('php://input'), true);
echo( $_POST  )


?>