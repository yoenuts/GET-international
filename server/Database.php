<?php

class Database {
    private $host = "localhost";
    private $dbname = 'articles';
    private $user = 'adminGET';
    private $pwd = 'GETinternational';


    public function connect() {

        $pdo = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->user, $this->pwd);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        return $pdo;

    }


}

