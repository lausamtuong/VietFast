<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
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
        break;
                        case 'POST':
                            $name = $_POST["name"];
                            $email = $_POST["email"];
                            $country = $_POST["country"];
                            $city = $_POST["city"];
                            $job = $_POST["job"];
                    
                            $sql = "insert into contacts (name, email, city, country, job) values ('$name', '$email', '$city', '$country', '$job')"; 
                            break;
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
   
} else {
    echo mysqli_affected_rows($con);
}
$con->close();
// $_POST = json_decode(file_get_contents('php://input'), true);
// echo( $_POST  )


?>