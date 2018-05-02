<?php
class Stock{
    private $conn;
    private $table_name = "tb_stock";

    public $kode;
    public $nama;
    public $harga;

    public function __construct($db){
        $this->conn = $db;
    }

    function readOne(){
        $query = "SELECT
                    kode, nama, harga  
                FROM
                    ".$this->table_name ."
                WHERE
                kode = ?
            ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->kode);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);    

        $this->kode = $row['kode'];
        $this->nama = $row['nama'];
        $this->harga = $row['harga'];
    }


}
?>