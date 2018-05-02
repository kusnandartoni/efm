<?php
    //required headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    // include database and object files
    include_once '../config/database.php';
    include_once '../objects/rule.php';

    // instantiate database and rule object
    $database = new Database();
    $db = $database->getConnection();

    // initialize object
    $rule = new Rule($db);

    // query rules
    $stmt = $rule->read();
    $num = $stmt->rowCount();

    // check if more than 0 record found
    // if($num>0){

        // rules array
    $rules_arr=array();
    $rules_arr["result"]="1";
    $rules_arr["records"]=array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $rules_item=array(
            "no" => $no,
            "item" => $item
        );
        array_push($rules_arr["records"],$rules_item);
    }
    echo json_encode($rules_arr);

?>