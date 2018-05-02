<?php
class Holiday{
    private $conn;
    private $table_name = "holiday";

    public $tanggal;
    public $descr;
    public $harga;

    public function __construct($db){
        $this->conn = $db;
    }

    function readOne(){
        $query = "SELECT
                    tanggal, descr  
                FROM
                    ".$this->table_name ."
                WHERE
                tanggal = ?
            ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->tanggal);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);    

        $this->tanggal = $row['tanggal'];
        $this->descr = $row['descr'];
    }
}
?>