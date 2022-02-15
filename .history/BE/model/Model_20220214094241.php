<?php

    require_once('DbModel.php')
    class Model extends DbModel{
       public function __construct(arg){
            $con = this->connect();
        }
    }
?>