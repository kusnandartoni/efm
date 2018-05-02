<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');

    include_once '../config/database.php';
    include_once '../objects/stock.php';

    $database = new Database();
    $db = $database->getConnection();

    $stock = new Stock($db);

    $stock->kode = isset($_GET['kode']) ? $_GET['kode'] : die();

    $stock->readOne();
    
    $stock_arr = array(
        "result"=>"1",        
        "kode" => trim($stock->kode),
        "nama" => trim($stock->nama),
        "harga" => trim($stock->harga)
    );

    if(! $stock->kode == null){
        print_r(json_encode($stock_arr));
    }else{
        echo json_encode(
            array(
                "result"=>"0",
                "message"=>"No User found."
                )
        );
    }
?>