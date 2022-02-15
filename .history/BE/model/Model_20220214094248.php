<?php

    require_once('DbModel.php')
    class Model extends DbModel{
       public function connect(arg){
            $con = this->connect();
        }
    }
?>