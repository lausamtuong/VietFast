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
                $myObj->image = $row['image'];
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
        $image = $_POST["image"];
        $content = $_POST["content"];
        $query = "INSERT INTO commentdb ( `username`, `comment`, `time`,`image`) 
           VALUES ('$name', '$content', '$time','$image')";
        $result = mysqli_query($con, $query);
        if($result)
            echo ('updateComment');
    }
    public function getComment(){
        $myArray = [];
        $con = $this->connect();
        $sql = 'SELECT `id`, `username`, `comment`, `time`,`image` FROM `commentdb`';
      
        $retval = mysqli_query( $con,$sql );
        if(! $retval ) {
            die('Could not get data: ' . mysqli_error());
         }
         
         while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'id' => "{$row['id']}",
                'username' =>  "{$row['username']}",
                'comment' =>  "{$row['comment']}",
                'time' =>  "{$row['time']}",
                'image' =>  "{$row['image']}",
        ]);
           
         }
         echo json_encode($myArray);
       
    }
    public function uploadAvt($image){
        $con=$this->connect();
        $image = $_POST["image"];
        $email = $_POST["email"];
        $sql = "UPDATE `account` SET `image` = '$image' WHERE `email`='$email'";
      
        $retval = mysqli_query( $con,$sql );
       echo('updateAvtSuccess');
    }
    public function setPay($image){
 }

?>