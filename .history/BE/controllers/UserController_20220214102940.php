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
            $name = $_POST["name"];
                $email = $_POST["email"];
                $password = $_POST["password"];
                $sql_u = "SELECT * FROM account WHERE username='$name'";
              	$sql_e = "SELECT * FROM account WHERE email='$email'";
              	$res_u = mysqli_query($con, $sql_u);
              	$res_e = mysqli_query($con, $sql_e);
              	if (mysqli_num_rows($res_u) > 0) {
                     
              	  echo  json_encode("usernameError"); 
                     exit();	
              	}else if(mysqli_num_rows($res_e) > 0){
              	  echo json_encode("emailError"); 	
                    exit();
              	}else{
                       $query = "INSERT INTO account (id,username, email, password,isAdmin) 
                  	    	  VALUES ('1','$name', '$email', '$password','false')";
                       $result = mysqli_query($con, $query);
                       echo 'Saved!';
                      
                       if(!$result){
                        http_response_code(404);
                        die(mysqli_error($con));
                        }
                   elseif ($method == 'POST') {
                        echo json_encode($result);
                        
                    }
                     else {
                        echo mysqli_affected_rows($con);
                    }
                       exit();
              	}
        }
    }
?>