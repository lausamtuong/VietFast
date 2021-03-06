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
                $myObj->fullname = $row['fullname'];
                $myObj->phone = $row['phone'];
                $myObj->address = $row['address'];
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
    public function updateUser($email,$name,$password,$email_origin, $fullname,$address,$phone,$image){
        $con = $this->connect();
        
        $query = "UPDATE  account SET `image`='$image', `fullname`='$fullname' , `address`='$address' , `phone`='$phone' , `username`='$name' ,  `email`='$email' WHERE  `email`='$email_origin'";
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
    public function getTrans(){
        $myArray = [];
        $con = $this->connect();
        $sql = 'SELECT  `username`, `amount`, `time`,`image` FROM `transaction`';
      
        $retval = mysqli_query( $con,$sql );
        if(! $retval ) {
            die('Could not get data: ' . mysqli_error());
         }
         
         while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
               
                'username' =>  "{$row['username']}",
                'amount' =>  "{$row['amount']}",
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
    public function setPayment($item , $email , $total,$image,$time,$name,$amount){
        $con=$this->connect();
        $sql = "UPDATE `account` SET `item` = '$item' , `total` = '$total' WHERE `email`='$email'";
        $sql2 = "INSERT INTO `transaction` ( `email`, `item`,`time`,`username`,`image`,`amount`) VALUES  ('$email','$item','$time','$name','$image','$amount')";
        $retval = mysqli_query( $con,$sql );
        $retval2 = mysqli_query( $con,$sql2 );
        

    }
    public function fetchItem(){
        $con=$this->connect();
        $myArray = [];
        $email = $_POST["email"];
        $sql = "SELECT  `item`,`total` FROM `account` WHERE `email`='$email'";
        $retval = mysqli_query( $con,$sql );
        while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'item' => "{$row['item']}",   
                'total' => "{$row['total']}",   
        ]);      
         }
         echo json_encode($myArray);
    }
    public function fetchClient(){
        $myArray = [];
        $con = $this->connect();
        $sql = 'SELECT `id`, `username`, `email`, `image`,`password`,`fullname`,`phone`,`address`,`total` FROM `account`';
      
        $retval = mysqli_query( $con,$sql );
        if(! $retval ) {
            die('Could not get data: ' . mysqli_error());
         }
         
         while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'id' => "{$row['id']}",
                'username' =>  "{$row['username']}",
                'email' =>  "{$row['email']}",
                'password' =>  "{$row['password']}",
                'image' =>  "{$row['image']}",
                'fullname' =>  "{$row['fullname']}",
                'phone' =>  "{$row['phone']}",
                'address' =>  "{$row['address']}",
                'total' =>  "{$row['total']}"
        ]);
         }
         echo json_encode($myArray);
    }
    public function deleteUsers($id){
        $con = $this->connect();
        $id = $_POST["id"];
        $sql = "DELETE FROM `account` WHERE `id`='$id'";
        $retval = mysqli_query( $con,$sql );
    }   
    public function deleteComments($id){
        $con = $this->connect();
        $id = $_POST["id"];
        $sql = "DELETE FROM `account` WHERE `id`='$id'";
        $retval = mysqli_query( $con,$sql );
    }  

 }

?>