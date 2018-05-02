<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');

    include_once '../config/database.php';
    include_once '../objects/holiday.php';

    $database = new Database();
    $db = $database->getConnection();

    $holiday = new Holiday($db);

    $holiday->tanggal = isset($_GET['tanggal']) ? $_GET['tanggal'] : die();

    $holiday->readOne();
    
    $holiday_arr = array(
        "result"=>"1",        
        "tgl" => $holiday->tanggal,
        "descr" => trim($holiday->descr)
    );

    if(! $holiday->tanggal == null){
        print_r(json_encode($holiday_arr));
    }else{
        echo json_encode(
            array(
                "result"=>"0",
                "message"=>"not Holiday"
                )
        );
    }
?>