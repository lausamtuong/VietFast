<?php
    require_once("model/Model.php")
    class UserController{
        public function getUser(){
            $emai= isset($_POST["emai"]) ? $_POST["emai"]:'';
            $password= isset($_POST["password"]) ? $_POST["password"]:'';
            if($password != '' && $emai!='')
            {
                $usermodel
            }
        }
    }
?>