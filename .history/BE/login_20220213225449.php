<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}
$_POST = json_decode(file_get_contents("php://input"),true);
$host = "localhost";
$user = 'root';
$password='';
$dbname="databaseobs";
$con = mysqli_connect($host,$user,$password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];

if(!$con)
    die("Couldn't connect to database'".mysqli_connect_error());
if (isset($_POST["email"])&&isset($_POST["password"]))
{
$email = $_POST["email"];
$password = $_POST["password"];
//to prevent mysql injection
$email = stripcslashes($email);
$password = stripcslashes($password);
$email = mysqli_real_escape_string($con,$email);
$password = mysqli_real_escape_string($con,$password);
$result = mysqli_query($con,"select * from account where email='$email' and password='$password'") 
    or die("Failed to querry database".mysqli_error($con));

$row = mysqli_fetch_array($result);

{
if(isset($row)$row['email']==$email && $row['password']==$password)
{
    $myObj = new stdClass();
    $myObj->username =$row['username'] ;
    $myObj->email = $row['email'];
    $myObj->password = $row['password'];
    $myObj->isAdmin = $row['isAdmin'];
    $myJSON = json_encode($myObj);
    echo ($myJSON);

}
else echo ("login false");
}
}

?>