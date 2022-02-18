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
                $email_origin= isset($_POST["email_origin"]) ? $_POST["email_origin"]:'';
                $name= isset($_POST["name"]) ? $_POST["name"]:'';
                if($name != '' && $email!=''  && $email_origin!='')
                {
                    $usermodel=new UserController();
                    $usermodel->updateUser($email,$name,$email_origin);
                }           
                }
                public function sendComment(){
                    $content= isset($_POST["content"]) ? $_POST["content"]:'';
                    $time= isset($_POST["time"]) ? $_POST["time"]:'';
                    $name= isset($_POST["name"]) ? $_POST["name"]:'';
                    if($name != '' && $content!=''  && $time!='')
                    {
                        $usermodel=new UserController();
                        $usermodel->updateComment($name,$time,$content);  
                    }           
                    }
                    public function fetchComment(){
                       
                            $usermodel=new UserController();
                            $usermodel->getComment($name,$time,$content);  
                    }
        }
    
?>