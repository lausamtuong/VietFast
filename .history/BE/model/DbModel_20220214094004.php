<?php
    class DbModel{
        public function connect(){
            $con = mysqli_connect('localhost','root','','databaseobs')
            if(mysqli_error())
                echo ("Connect Fail")
            else return $con
        }
    }
?>