<?php

    if($_SERVER["REQUEST_METHOD"]){

        if($_SERVER["REQUEST_METHOD"] == "DELETE"){

            session_start();
            session_destroy();
            echo "true";

        }

    }

?>