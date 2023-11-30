<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

require_once '../vendor/autoload.php';
include_once '../Database.php';
include_once '../model/submitmodel.php';

echo('HELLO WORLD');


class submitArticle extends articleModel {

    private $userID;
    private $title;
    private $file;
    private $org;
    private $model;


    public function __construct($w,$y,$x, $z){

        $this -> userID = $w;
        $this -> title = $y;
        $this -> file = $x;
        $this -> org = $z;
        $this -> model = new articleModel();
    }

    public function addArticle() {
        if($this -> articleExists()) {
            echo json_encode(['status' => 0, 'message' => 'Article Already exists.']);
            return false;
        }
        else {
            return $this -> model -> setArticle($this -> userID, $this -> title, $this -> file, $this -> org);
        }
    }


    private function articleExists() {
        return $this -> checkArticle($this -> title);
    }

    public function articleToken() {
        try {
            $token = $this -> getAuthorization();

            if (!$token) {
                echo json_encode(['status' => 0, 'message' => 'Token not provided']);
                return false;
            }

            $config = include('../config/config.php');
            $key = $config['secretKey'];
    
            $decoded = JWT::decode($token, new Key($key, 'HS256'));
            return $decoded;

        } catch (\Firebase\JWT\ExpiredException $e) {
            // Handle expired token
            echo json_encode(['status' => 0, 'message' => 'Token has expired']);
            return false;
        }
         catch (\Exception $e) {
            // Handle other exceptions
            echo json_encode(['status' => 0, 'message' => 'Error decoding token']);
            return false;
        }

    }

    /*
         returns an associative array where the keys are the header 
         names and the values are the corresponding header values.


    */

    private function getAuthorization() {
        $header = apache_request_headers();
        if(isset($header['Authorization'])) {
            return trim(str_replace('Bearer', '', $header['Authorization']));
        }

        return null;
    }

}


$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    echo 'method was post';
    $userID = $_POST['userID'];
    $title = $_POST['title'];
    $org = $_POST['org'];
    $file = $_FILES['file'];


    $article = new submitArticle($userID, $title, $file, $org);

    $decodeToken = $article -> articleToken();

    if($decodeToken) {
        echo 'decoding token was succesful';

        $article -> addArticle();
    }
    



} else {
    return json_encode(['status' => 0, 'message' => 'Invalid request method']);
}