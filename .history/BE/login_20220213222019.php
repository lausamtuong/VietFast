<?php


$email = $_POST["email"];
$password = $_POST["password"];
//to prevent mysql injection
$email = stripcslashes($email);
$password = stripcslashes($password);
$email = mysqli_real_escape_string($con,$email);
$password = mysqli_real_escape_string($con,$password);
$result = mysqli_query($con,"select * from account where email='$email' and password='$password'") 
    or die("Failed to querry database".mysqli_error($con));
$row = mysqli_fetch_array($result);
if($row['email']=='$email' && $row['password']=='$password')
    echo('login success!!');
else echo ($row['email']);
break;
?>