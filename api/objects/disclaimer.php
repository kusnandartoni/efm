<?php
class Disclaimer{
    private $conn;
    private $table_name = "tb_disclaimer";

    public $no;
    public $item;

    public function __construct($db){
        $this->conn = $db;
    }

    function read(){
        $query = "SELECT
                    no, item
                FROM
                    ".$this->table_name."
                    ";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}
?>