<?php
    
    require_once('controllers/UserController.php');
    class Model extends DbModel
    {
        public function getUser(){
            $email= isset($_POST["email"]) ? $_POST["email"]:'';
            $password= isset($_POST["password"]) ? $_POST["password"]:'';
            if($password != '' && $email!='')
            {
                $usermodel=new UserController();
                $usermodel->login($email,$password);
            }
            else echo ("login false");
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
            else echo ("Dien vao ");
               
    }
       
        }
    
?>