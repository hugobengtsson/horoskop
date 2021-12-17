switch ([$month, $date]){
                case "Januari":
                    if ($date < 10){
                        echo json_encode($month);
                    }
                    elseif ($date > 10){
                        echo json_encode($date);
                    }
                break;
                case "Februari":
                    echo json_encode($month);
                break;
                case "Mars":
                    echo json_encode($month);
                break;
                case "April":
                    echo json_encode($month);
                break;
                case "Maj":
                    echo json_encode($month);
                break;
                case "Juni":
                    echo json_encode($month);
                break;
                case "Juli":
                    echo json_encode($month);
                break;
                case "Augusti":
                    echo json_encode($month);
                break;
                case "September":
                    echo json_encode($month);
                break;
                case "Oktober":
                    echo json_encode($month);
                break;
                case "November":
                    echo json_encode($month);
                break;
                case "December":
                    echo json_encode($month);
                break;
            }