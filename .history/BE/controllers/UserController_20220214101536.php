<?php
    require_once('model/Model.php');
    class UserController{
        public function getUser(){
            echo ($_POST["email"])
            $email= isset($_POST["emai"]) ? $_POST["emai"]:'';
            $password= isset($_POST["password"]) ? $_POST["password"]:'';
            if($password != '' && $email!='')
            {
                $usermodel=new Model();
                $usermodel->login($email,$password);
            }
            else echo ("login false");
        }
    }
?>