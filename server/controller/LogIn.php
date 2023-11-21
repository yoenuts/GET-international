<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

require_once '../vendor/autoload.php';
include_once '../Database.php';
include_once '../model/loginmodel.php';


class LogIn extends LogInModel {
    private $userIdentity;
    private $password;
    private $model;

    public function __construct($w,$y){
        $this -> userIdentity = $w;
        $this -> password = $y;
        $this -> model = new LogInModel();
    }


    public function loginUser(){
        if($this -> userExists()) {
            echo 'User doesnt exist !!!';
        }
        else {
            $result = $this->model;
            $result -> getUser($this -> userIdentity, $this -> password);
    
            $userID = $result -> retrieveID($this -> userIdentity, $this -> password);
            $userName = $result -> retrieveName($userID, $this -> password);
    
            if($userID !== 1) {
                $role = 'user';
            }
            else {
                $role = 'admin';
            }
    
            $jwt = $this -> generateJWT($userID, $userName, $role);
    
            return $result;
        }


        return null;
    }


    private function userExists(){
        $empty = false;

        if(!$this -> checkUserExists($this -> userIdentity)){
            $empty = true;
            echo 'user doesnt exist!';
        }

        return $empty;
    }

    private function generateJWT($userId, $username, $role) {
        $key = 'AdminTESOL';
        //$issuedAt = time();
        //$expirationTime = $issuedAt + 3600; // Token expiration time (e.g., 1 hour)
        $payload = array(
            'iss' => 'localhost', // Issuer
            'aud' => 'localhost', // Audience
            'exp' => time() + 10000, //10 minutes
            'data' => [
                'sub' => $userId, // Subject (user ID)
                'name' => $username,
                'role' => $role, // User role
            ]

        );
        $jwt = JWT::encode($payload, $key, 'HS256');
        echo json_encode([
            'status' => 1,
            'jwt' => $jwt,
            'message' => 'Auth token generated',

        ]);

        return $jwt;
    }

    public function testing() {
        echo 'hi';
        echo 'hello' . $this -> userIdentity ;
        echo 'ice cream lover ' . $this -> password;
    }


}

$method = $method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {

    $user = json_decode(file_get_contents('php://input'));

    $logIn = new LogIn($user->userIdentity, $user->password);
    $logIn -> testing();
    $response = $logIn -> loginUser();

    if($response) {
        return json_encode(['status' => 1, 'message' => 'Succesfully Logged in.']);
    }
    else {
        return json_encode(['status' => 0, 'message' => 'Failure to log in.']);
    }

} else {
    return json_encode(['status' => 0, 'message' => 'Invalid request method']);
}