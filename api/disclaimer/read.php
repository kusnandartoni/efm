<?php
    //required headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    // include database and object files
    include_once '../config/database.php';
    include_once '../objects/disclaimer.php';

    // instantiate database and disclaimer object
    $database = new Database();
    $db = $database->getConnection();

    // initialize object
    $disclaimer = new Disclaimer($db);

    // query disclaimers
    $stmt = $disclaimer->read();
    $num = $stmt->rowCount();

    // check if more than 0 record found
    // if($num>0){

        // disclaimers array
    $disclaimers_arr=array();
    $disclaimers_arr["result"]="1";
    $disclaimers_arr["records"]=array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $disclaimers_item=array(
            "no" => $no,
            "item" => $item
        );
        array_push($disclaimers_arr["records"],$disclaimers_item);
    }
    echo json_encode($disclaimers_arr);
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