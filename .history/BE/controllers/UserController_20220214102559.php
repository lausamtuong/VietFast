<?php
    require_once('model/Model.php');
    class UserController{
        public function getUser(){
          
            $email= isset($_POST["email"]) ? $_POST["email"]:'';
            $password= isset($_POST["password"]) ? $_POST["password"]:'';
            if($password != '' && $email!='')
            {
                $usermodel=new Model();
                $usermodel->login($email,$password);
            }
            else echo ("login false");
        }
        public function register(){
            
        }
    }
?>