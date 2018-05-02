<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Methods: POST");
	header("Access-Control-Max-Age: 3600");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	     
    include_once '../config/database.php';

    include_once '../objects/login.php';

	$database = new Database();
	$db = $database->getConnection();
	 
    $login = new Login($db);
	 
    // get posted data
    $data = json_decode(file_get_contents("php://input"));

    $login->clientId = $data->clientId;

    $login->password = md5($data->password);
    $login->nama = $data->nama;
    $login->level = $data->level;
	 
	// update the product
	if($login->update()){
        echo json_encode(
            array(
                "result"=>"1",
                "message"=>"Data berhasil diubah"
                )
        );
	}else{
        echo json_encode(
            array(
                "result"=>"0",
                "message"=>"Gagal ubah user"
                )
        );
    }
?>