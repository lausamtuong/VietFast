<?php

    require_once('DbModel.php')
    class Model extends DbModel{
       public function login($email,$password){
            $con = this->connect();

        }
    }
?>