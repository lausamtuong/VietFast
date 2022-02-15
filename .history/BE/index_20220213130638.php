<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: *");
$_POST = json_decode(file_get_contents("php://input"),true);
echo $_POST['data1'];
echo('hello world')
?>