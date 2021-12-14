<?php

    try {

        if($_SERVER["REQUEST_METHOD"]){

            if($_SERVER["REQUEST_METHOD"] == "GET"){

                session_start();

                if($_SESSION["zodiacSign"]){
                    echo json_encode($_SESSION["zodiacSign"]);
                }
            }

        }












    } catch(Exeption $err){

    }





?>