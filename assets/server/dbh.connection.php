<?php

$host = "localhost";
$dbname = 'articles';
$user = 'adminGET';
$pwd = 'GETinternational';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pwd);
    
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";


} catch(PDOException $e) {
    echo "Connection Failed:" . $e -> getMessage();
}