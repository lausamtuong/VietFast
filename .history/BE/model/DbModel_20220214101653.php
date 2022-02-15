<?php
    class DbModel{
        public function connect(){
            $con = mysqli_connect('localhost','root','','databaseobs');
            if(mysqli_error($con))
                echo ("Connect Fail");
            else return $con;
        }
    }
?>