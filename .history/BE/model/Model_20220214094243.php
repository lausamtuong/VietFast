<?php

    require_once('DbModel.php')
    class Model extends DbModel{
       public function construct(arg){
            $con = this->connect();
        }
    }
?>