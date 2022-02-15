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
switch ($method) {
    case 'GET':
       $sql="select * from account";
       echo ($method);
        break;
    case 'POST':
        echo ($method);
            $name = $_POST["name"];
            $email = $_POST["email"];
            $password = $_POST["password"];
            $sql = "insert into account (id,username, email, password) values ('1','$name', '$email','$password')"; 
            break;
}
$select = mysqli_query($conn, 'SELECT * FROM account WHERE username = "'.$_POST["name"].'"');
if(mysqli_num_rows($select)) {
    exit('This username already exists');
}
$result = mysqli_query($con,$sql);
if(!$result){
    http_response_code(404);
    die(mysqli_error($con));
    }
if ($method=='GET')
{
    
    for ($i=0; $i<mysqli_num_rows($result);$i++){
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
}elseif ($method == 'POST') {
    echo json_encode($result);
}
 else {
    echo mysqli_affected_rows($con);
}
$con->close();
// $_POST = json_decode(file_get_contents('php://input'), true);
// echo( $_POST  )


?>