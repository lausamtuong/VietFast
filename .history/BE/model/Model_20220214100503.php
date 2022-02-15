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
            return $result = mysqli_query($con,"select * from account where email='$email' and password='$password'") 
            or die("Failed to querry database".mysqli_error($con));

        }
    }
?>