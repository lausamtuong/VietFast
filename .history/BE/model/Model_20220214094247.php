<?php

    require_once('DbModel.php')
    class Model extends DbModel{
       public function co(arg){
            $con = this->connect();
        }
    }
?>