<?php
   require_once('model/DbModel.php');
    class UserController extends DbModel {
        public function login($email,$password){
            $con = $this->connect();
            $email = stripcslashes($email);
            $password = stripcslashes($password);
            $email = mysqli_real_escape_string($con,$email);
            $password = mysqli_real_escape_string($con,$password);
            $result = mysqli_query($con,"select * from account where email='$email' and password='$password'") 
                or die("Failed to querry database".mysqli_error($con));
            $row = mysqli_fetch_array($result);
            if(isset($row)&&$row['email']==$email && $row['password']==$password)
            {
                $myObj = new stdClass();
                $myObj->username =$row['username'] ;
                $myObj->email = $row['email'];
                $myObj->password = $row['password'];
                $myObj->isAdmin = $row['isAdmin'];
                $myJSON = json_encode($myObj);
                echo ($myJSON); 
            }
            else echo ("login false");

        }
        public function register($name,$email,$password){
            $con = $this->connect();
            $name = $_POST["name"];
            $email = $_POST["email"];
            $password = $_POST["password"];
          
              $sql_e = "SELECT * FROM account WHERE email='$email'";
             
              $res_e = mysqli_query($con, $sql_e);
             if(mysqli_num_rows($res_e) > 0){
                echo json_encode("emailError"); 	
                exit();
              }else{
                   $query = "INSERT INTO `account` (username, email, password,isAdmin) 
                            VALUES ('$name', '$email', '$password','false')";
                   $result = mysqli_query($con, $query);
                   echo 'Saved!';
                  
                   if(!$result){
                    http_response_code(404);
                    die(mysqli_error($con));
                    }
                 else {
                    echo mysqli_affected_rows($con);
                }
                   exit();
              }
    }
    public function updateUser($email,$password,$email_origin){
        $con = $this->connect();
        $email = $_POST["email"];
        $name = $_POST["name"];
        $query = "UPDATE  account SET  `username`='$name' ,  `email`='$email' WHERE  `email`='$email_origin'";
        $result = mysqli_query($con, $query);
        if($result)
            echo ('UpdateSuccess');
    }
    public function updateComment($name,$time,$content){
       
        $con = $this->connect();
        $time = $_POST["time"];
        $name = $_POST["name"];
        $content = $_POST["content"];
       
        echo json_encode($myArray);
        $query = "INSERT INTO commentdb ( `username`, `comment`, `time`) 
           VALUES ('$name', '$content', '$time')";
        $result = mysqli_query($con, $query);
        if($result)
            echo ('updateComment');
    }
    public function getComment(){
        $myArray = [];
        $con = $this->connect();
        $sql = 'SELECT `id`, `username`, `comment`, `time` FROM `commentdb`';
        mysql_select_db('test_db');
        $retval = mysql_query( $con,$sql );
        if(! $retval ) {
            die('Could not get data: ' . mysql_error());
         }
         
         while($row = mysql_fetch_array($retval, MYSQL_ASSOC)) {
            $myArray[] = (object) ['name' => '{$row["username"]}'];
            $myArray[] = (object) ['commen t' => 'My id'];
            $myArray[] = (object) ['id' => 'My ixd'];
            $myArray[] = (object) ['time' => 'My ixd'];
            echo "EMP ID :{$row['comment']}  <br> ".
               "EMP NAME :  <br> ".
               "EMP SALARY : {$row['time']} <br> ".
               "--------------------------------<br>";
         }
       
    }
 }

?>