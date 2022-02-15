<?php

    require_once('DbModel.php')
    class Model extends DbModel{
        function __construct(arg){
            $con = this->connect();
        }
    }
?>