<?php

try {

    require_once("./horoscope.php");

    // If there exists a request method
    if($_SERVER["REQUEST_METHOD"]){

        // IF request method is GET
        if($_SERVER["REQUEST_METHOD"] == "POST"){

            session_start();

            $body = json_decode($_POST["body"], true);

            $month = $body["month"];
            $date = $body["date"];
            //echo json_encode($month . " " . $date);

            function saveHoroscope($zodiacSign, $description){

                $toBeSaved = [
                    $zodiacSign,
                    $description
                ];

                if(isset($_SESSION["zodiacSign"])){
                    echo "false";

                } else{
                    // Saves the list to SESSION
                    $_SESSION["zodiacSign"] = $toBeSaved;
                    echo "true";
                }

            }

            // Checking the different possibilitys for the different zodiac signs
            if($month == "Januari"){
                if($date <= 19){
                    saveHoroscope("Stenbocken", $horoscope["stenbocken"]);
                } elseif($date >= 20){
                    saveHoroscope("Vattumannen", $horoscope["vattumannen"]);
                }
            } elseif ($month == "Februari"){
                if($date <= 18){
                    saveHoroscope("Vattumannen", $horoscope["vattumannen"]);
                } elseif($date >= 19){
                    saveHoroscope("Fiskarna", $horoscope["fiskarna"]);
                }
            } elseif ($month == "Mars"){
                if($date <= 20){
                    saveHoroscope("Fiskarna", $horoscope["fiskarna"]);
                } elseif($date >= 21){
                    saveHoroscope("Väduren", $horoscope["vaduren"]);
                }
            } elseif ($month == "April"){
                if($date <= 19){
                    saveHoroscope("Väduren", $horoscope["vaduren"]);
                } elseif($date >= 20){
                    saveHoroscope("Oxen", $horoscope["oxen"]);
                }
            } elseif ($month == "Maj"){
                if($date <= 20){
                    saveHoroscope("Oxen", $horoscope["oxen"]);
                } elseif($date >= 21){
                    saveHoroscope("Tvillingarna", $horoscope["tvillingarna"]);
                }
            } elseif ($month == "Juni"){
                if($date <= 20){
                    saveHoroscope("Tvillingarna", $horoscope["tvillingarna"]);
                } elseif($date >= 21){
                    saveHoroscope("Kräftan", $horoscope["kraftan"]);
                }
            } elseif ($month == "Juli"){
                if($date <= 22){
                    saveHoroscope("Kräftan", $horoscope["kraftan"]);
                } elseif($date >= 23){
                    saveHoroscope("Lejonet", $horoscope["lejonet"]);
                }
            } elseif ($month == "Augusti"){
                if($date <= 22){
                    saveHoroscope("Lejonet", $horoscope["lejonet"]);
                } elseif($date >= 23){
                    saveHoroscope("Jungfrun", $horoscope["jungfrun"]);
                }
            } elseif ($month == "September"){
                if($date <= 22){
                    saveHoroscope("Jungfrun", $horoscope["jungfrun"]);
                } elseif($date >= 23){
                    saveHoroscope("Vågen", $horoscope["vagen"]);
                }
            } elseif ($month == "Oktober"){
                if($date <= 22){
                    saveHoroscope("Vågen", $horoscope["vagen"]);
                } elseif($date >= 23){
                    saveHoroscope("Skorpionen", $horoscope["skorpionen"]);
                }
            } elseif ($month == "November"){
                if($date <= 21){
                    saveHoroscope("Skorpionen", $horoscope["skorpionen"]);
                } elseif($date >= 22){
                    saveHoroscope("Skytten", $horoscope["skytten"]);
                }
            } elseif ($month == "December"){
                if($date <= 21){
                    saveHoroscope("Skytten", $horoscope["skytten"]);
                } elseif($date >= 23){
                    saveHoroscope("Stenbocken", $horoscope["stenbocken"]);
                }
            }

        }

    }

} catch(Exception $err){

}

?>