<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
echo file_get_contents('php://input');
echo json_decode(file_get_contents('php://input'), true);

?>