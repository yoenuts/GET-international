<?php

use Firebase\JWT\JWT;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

require_once '../vendor/autoload.php';
include_once '../Database.php';
include_once '../model/submitmodel.php';

//echo('HELLO WORLD');


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

    private function articleToken($token) {
        try {
            $config = include('../config/config.php');
            $key = $config['secretKey'];
    
            $decoded = JWT::decode($token, $key);
    
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

}


$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {

    $token = $_POST['token'];
    $userID = $_POST['userID'];
    $title = $_POST['title'];
    $org = $_POST['org'];
    $file = $_FILES['file'];


    $article = new submitArticle($userID, $title, $file, $org);
    $decodeToken = $article -> articleToken($token);

    if($decodeToken) {
        $article -> addArticle();
    }
    

    if($article) {

    }
    


} else {
    return json_encode(['status' => 0, 'message' => 'Invalid request method']);
}