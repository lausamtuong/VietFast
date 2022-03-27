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
                $image= isset($_POST["image"]) ? $_POST["image"]:'';
               
                $fullname= isset($_POST["fullname"]) ? $_POST["fullname"]:'';
                $address= isset($_POST["address"]) ? $_POST["address"]:'';
                $phone= isset($_POST["phone"]) ? $_POST["phone"]:'';
                $password= isset($_POST["password"]) ? $_POST["password"]:'';
                if($name != '' && $email!=''  && $email_origin!='')
                {
                    $usermodel=new UserController();
                    $usermodel->updateUser($email,$name,$password,$email_origin, $fullname,$address,$phone,$image);
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
                            $usermodel->getComment();  
                    }
                public function fetchTrans(){
                       
                            $usermodel=new UserController();
                            $usermodel->getTrans();  
                    }
                    public function setAvt(){
                        $image= isset($_POST["iamge"]) ? $_POST["image"]:'';
                        $usermodel=new UserController();
                        $usermodel->uploadAvt($image);  
                }
                public function payment(){
                    $amount= isset($_POST["amount"]) ? $_POST["amount"]:'';
                    $total= isset($_POST["total"]) ? $_POST["total"]:'';
                    $email= isset($_POST["email"]) ? $_POST["email"]:'';
                    $item= isset($_POST["item"]) ? $_POST["item"]:'';
                    $time= isset($_POST["time"]) ? $_POST["time"]:'';
                    $image= isset($_POST["image"]) ? $_POST["image"]:'';
                    $name= isset($_POST["name"]) ? $_POST["name"]:'';
                        $usermodel=new UserController();
                        $usermodel->setPayment($item , $email , $total,$image,$time,$name,$amount);  
                  
            }
            public function getItem(){
                $email= isset($_POST["email"]) ? $_POST["email"]:'';
                $usermodel=new UserController();
                $usermodel->fetchItem($email);  
        }
        public function getClient(){
            $usermodel=new UserController();
            $usermodel->fetchClient();  
        }
        public function deleteUser(){
            $id= isset($_POST["id"]) ? $_POST["id"]:'';
            $usermodel=new UserController();
            $usermodel->deleteUsers($id);  
        }
        public function deleteComment(){
            $time= isset($_POST["time"]) ? $_POST["time"]:'';
            $usermodel=new UserController();
            $usermodel->deleteComments($time);  
        }
        public function contact(){
            $name= isset($_POST["name"]) ? $_POST["name"]:'';
            $phone= isset($_POST["phone"]) ? $_POST["phone"]:'';
            $email= isset($_POST["email"]) ? $_POST["email"]:'';
            $type= isset($_POST["type"]) ? $_POST["type"]:'';
            $dtail= isset($_POST["dtail"]) ? $_POST["dtail"]:'';

            $usermodel=new UserController();
            $usermodel->(contactDB$name,$phone,$email,$type,$detail);  
        }

    }
?>