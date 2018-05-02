<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');

    include_once '../config/database.php';
    include_once '../objects/validasi.php';

    $database = new Database();
    $db = $database->getConnection();

    $validasi = new Validasi($db);

    $validasi->clientId = isset($_GET['clientId']) ? $_GET['clientId'] : die();

    $validasi->readOne();
    
    $validasi_arr = array(
        "result"=>"1",        
        "clientId" => trim($validasi->clientId),
        "nik" => trim($validasi->nik),
        "ktp" => trim($validasi->ktp),
        "tglLahir" => trim($validasi->tglLahir),
        "nama" => trim($validasi->nama),
        "bbca" => trim($validasi->bbca)
    );

    if(! $validasi->clientId == null){
        print_r(json_encode($validasi_arr));
    }else{
        echo json_encode(
            array(
                "result"=>"0",
                "message"=>"No User found"
                )
        );
    }
?>