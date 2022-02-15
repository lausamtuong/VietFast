<?php

    require_once('DbModel.php');
    class Model extends DbModel
    {
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
        public function 
    }
?>