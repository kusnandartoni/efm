<?php
class Validasi{
    private $conn;
    private $table_name = "tb_validasi";

    public $clientId;
    public $nik;
    public $ktp;
    public $tglLahir;
    public $nama;
    public $bbca;
    public $query;

    public function __construct($db){
        $this->conn = $db;
    }

    function read(){

    }

    function readOne(){
        $query = "SELECT
                    clientId, nik, ktp, tglLahir, nama, bbca 
                FROM
                    ".$this->table_name ."
                WHERE
                clientId = ?
            ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->clientId);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);    
        
        $this->query = $query;
        $this->clientId = $row['clientId'];
        $this->nik = $row['nik'];
        $this->ktp = $row['ktp'];
        $this->tglLahir = $row['tglLahir'];
        $this->nama = $row['nama'];
        $this->bbca = $row['bbca'];
    }


}
?>