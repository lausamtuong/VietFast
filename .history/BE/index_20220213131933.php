<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
$data = json_decode(file_get_contents('php://input'), true);
echo($data);
$name = $_POST['name'];
echo $name;

?>