<?php

    try {

        if($_SERVER["REQUEST_METHOD"]){

            if($_SERVER["REQUEST_METHOD"] == "GET"){

                session_start();

                if(isset($_SESSION["zodiacSign"])){
                    echo json_encode($_SESSION["zodiacSign"]);
                } else{
                    echo "false";
                }
            }
        }

    } catch(Exeption $err){

    }





?>