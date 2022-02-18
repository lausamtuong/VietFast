<?php
    require_once('controllers/UserController.php');
    class Model 
    {
        public function getUser(){
            $email= isset($_POST["email"]) ? $_POST["email"]:'';
            $password= isset($_POST["password"]) ? $_POST["password"]:'';
            if($password != '' && $email!='')
            {
                $usermodel=new UserController();
                $usermodel->login($email,$password);
            }
           
        }
        public function getUserRegister(){
            $email= isset($_POST["email"]) ? $_POST["email"]:'';
            $password= isset($_POST["password"]) ? $_POST["password"]:'';
            $name= isset($_POST["name"]) ? $_POST["name"]:'';
            if($password != '' && $email!='' && $name!='')
            {
                $usermodel=new UserController();
                $usermodel->register($name,$email,$password);
            }           
    }
        public function getUserUpdatePassword(){
            $email= isset($_POST["email"]) ? $_POST["email"]:'';
            $password= isset($_POST["password"]) ? $_POST["password"]:'';
            if($password != '' && $email!='' )
            {
                $usermodel=new UserController();
                $usermodel->updateUser($email,$password);
            }           
            }
            public function getUserUpdate(){
                $email= isset($_POST["email"]) ? $_POST["email"]:'';
                $name= isset($_POST["name"]) ? $_POST["password"]:'';
                if($password != '' && $email!='' )
                {
                    $usermodel=new UserController();
                    $usermodel->updateUser($email,$password);
                }           
                }
        }
    
?>