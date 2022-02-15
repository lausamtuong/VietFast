<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
$host = "localhost"
$user = "root"
$password=""
$dbname="databaseobs"
$con = mysqli_connect($host,$user,$password,$dbname)
$method = $_SERVER['REQUEST_METHOD']
if(!$con)
    die("Couldn't connect to database'".mysqli_connect_error())
switch ($method) {
    case 'GET':
       $sql="select * from account"
        break;
}
$result = mysqli_query($con,$sql)
if(!$result){
http_response_code(404)
die(mysqli())
}

$_POST = json_decode(file_get_contents('php://input'), true);
echo( $_POST  )


?>