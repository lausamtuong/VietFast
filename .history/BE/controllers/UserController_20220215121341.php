<?php
   require_once('model/DbModel.php');
    class UserController extends DbModel {
        public function login($email,$password){
            $con = $this->connect();
            $email = stripcslashes($email);
            $password = stripcslashes($password);
            $email = mysqli_real_escape_string($con,$email);
            $password = mysqli_real_escape_string($con,$password);
            $result = mysqli_query($con,"select * from account where email='$email' and password='$password'") 
                or die("Failed to querry database".mysqli_error($con));
            $row = mysqli_fetch_array($result);
            if(isset($row)&&$row['email']==$email && $row['password']==$password)
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
        public function register($name,$email,$password){
            $con = $this->connect();
            $name = $_POST["name"];
            $email = $_POST["email"];
            $password = $_POST["password"];
            $sql_u = "SELECT * FROM account WHERE username='$name'";
              $sql_e = "SELECT * FROM account WHERE email='$email'";
              $res_u = mysqli_query($con, $sql_u);
              $res_e = mysqli_query($con, $sql_e);
              if (mysqli_num_rows($res_u) > 0) {
                 
                echo  json_encode("usernameError"); 
                 exit();	
              }else if(mysqli_num_rows($res_e) > 0){
                echo json_encode("emailError"); 	
                exit();
              }else{
                   $query = "INSERT INTO account (id,username, email, password,isAdmin) 
                            VALUES ('1','$name', '$email', '$password','false')";
                   $result = mysqli_query($con, $query);
                   echo 'Saved!';
                  
                   if(!$result){
                    http_response_code(404);
                    die(mysqli_error($con));
                    }
                 else {
                    echo mysqli_affected_rows($con);
                }
                   exit();
              }
    }
    public function updateUser($email,$password){
        $con = $this->connect();
        $email = $_POST["email"];
        $password = $_POST["password"];
        $query = "UPDATE  account SET  'password'=$password' WHERE  'email'='$email'";
        $result = mysqli_query($con, $query);
        if($result)
            echo ('update thanh cong');
    }
}
?>