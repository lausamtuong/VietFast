<?php

    require_once('DbModel.php')
    class Model extends DbModel{
       public function login($email,$password){
            $con = this->connect();
            
            $result = mysqli_query($con,"select * from account where email='$email' and password='$password'") 
            or die("Failed to querry database".mysqli_error($con));

        }
    }
?>