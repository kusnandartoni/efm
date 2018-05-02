<?php
    //required headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    // include database and object files
    include_once '../config/database.php';
    include_once '../objects/keterangan.php';

    // instantiate database and keterangan object
    $database = new Database();
    $db = $database->getConnection();

    // initialize object
    $keterangan = new Keterangan($db);

    // query keterangans
    $stmt = $keterangan->read();
    $num = $stmt->rowCount();

    // check if more than 0 record found
    // if($num>0){

        // keterangans array
    $keterangans_arr=array();
    $keterangans_arr["result"]="1";
    $keterangans_arr["records"]=array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $keterangans_item=array(
            "no" => $no,
            "item" => $items
        );
        array_push($keterangans_arr["records"],$keterangans_item);
    }
    echo json_encode($keterangans_arr);
    // }
    // else{
        
    //     echo json_encode(
    //         array(
    //             "result"=>"0",
    //             "message"=>"No User found."
    //             )
    //     );
    // }
?>