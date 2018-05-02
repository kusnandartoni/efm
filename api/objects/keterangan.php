<?php
class Keterangan{
    private $conn;
    private $table_name = "tb_keterangan";

    public $no;
    public $items;
    public $query;

    public function __construct($db){
        $this->conn = $db;
    }

    function read(){
        $query = "SELECT
                    no, items
                FROM
                    ".$this->table_name."
                    ";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $this->query = $query;
        return $stmt;
    }
}
?>