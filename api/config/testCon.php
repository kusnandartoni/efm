<?php 
    // private $host ='localhost';
    // private $db_name = 'u8575377_db_api';
    // private $username = 'u8575377_toni';
    // private $password = 'Jualan31!';
     $host ='192.168.15.8';
    $db_name = 'EFORM';
    $username = 'user_eform';
    $pw = 'UsrEFM2017!';
    $conn;

        $conn = null;
        try{
            //$this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            //$conn = new PDO("sqlsrv:Server=".$host.";Database=".$db_name, $username, $password);
	    $conn =  new PDO ("dblib:host=$host:1433;dbname=$db_name","$username","$pw");
            $conn->exec("set names utf8");
	    echo "success connect";
        }catch (PDOException $exception){
            echo "Connection error". $exception->getMessage();
        }
	$stmt = $conn->prepare("select * from tb_validasi where clientId='0091'");
  	$stmt->execute();
	while ($row = $stmt->fetch()){
		print_r($row);
	}
	unset($conn);unset($stmt);
?>
