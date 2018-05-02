<?php
    class Logger{
        private $conn;
        private $table_name = "tb_log";

        public $time;
        public $user;
        public $log;
        public $ip;
        public $query;

        public function __construct($db){
            $this->conn = $db;
        }

        function create(){
            $query = "INSERT INTO
                        ".$this->table_name." 
                        (time,
                        [user],
                        [log],
                        [ip])
                    VALUES
                        (getdate(),
                        :user,
                        :log,
                        :ip)
                    ";
                    
            $stmt = $this->conn->prepare($query);
            $this->user = htmlspecialchars(strip_tags($this->user));
            $this->log = htmlspecialchars(strip_tags($this->log));
            $this->ip = htmlspecialchars(strip_tags($this->ip));
            
            $stmt->bindParam(":user",$this->user);
            $stmt->bindParam(":log",$this->log);
            $stmt->bindParam(":ip",$this->ip);
            $this->query=$query;
            if($stmt->execute()){
                return true;
            }else{
                return false;
            }
        }

    }
?>