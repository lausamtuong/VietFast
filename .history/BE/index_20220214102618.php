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
// $host = "localhost";
// $user = 'root';
// $password='';
// $dbname="databaseobs";
// $con = mysqli_connect($host,$user,$password,$dbname);
// $method = $_SERVER['REQUEST_METHOD'];
// if(!$con)
//     die("Couldn't connect to database'".mysqli_connect_error());
// if ($method=='POST'){
//     $name = $_POST["name"];
//     $email = $_POST["email"];
//     $password = $_POST["password"];
//     $sql_u = "SELECT * FROM account WHERE username='$name'";
//   	$sql_e = "SELECT * FROM account WHERE email='$email'";
//   	$res_u = mysqli_query($con, $sql_u);
//   	$res_e = mysqli_query($con, $sql_e);
//   	if (mysqli_num_rows($res_u) > 0) {
         
//   	  echo  json_encode("usernameError"); 
//          exit();	
//   	}else if(mysqli_num_rows($res_e) > 0){
//   	  echo json_encode("emailError"); 	
//         exit();
//   	}else{
//            $query = "INSERT INTO account (id,username, email, password,isAdmin) 
//       	    	  VALUES ('1','$name', '$email', '$password','false')";
//            $result = mysqli_query($con, $query);
//            echo 'Saved!';
          
//            if(!$result){
//             http_response_code(404);
//             die(mysqli_error($con));
//             }
//        elseif ($method == 'POST') {
//             echo json_encode($result);
            
//         }
//          else {
//             echo mysqli_affected_rows($con);
//         }
//            exit();
//   	}
// }
// $con->close();
$controller= isset($_GET["controller"]) ? $_GET["controler"].'Controller' :"UserController";
$action = isset($_POST["action"])? $_POST["action"]:'getUser';
echo($action);
require_once('controllers/UserController.php');
$usercontroller = new $controller();
$usercontroller->$action();
?>