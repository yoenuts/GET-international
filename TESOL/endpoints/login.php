<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

include 'Database.php';

$objDb = new Database;
$conn = $objDb->connect();
var_dump($conn);