<?php

use Firebase\JWT\JWT;

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
            return null;
        }
        else {
            $result = $this-> model -> getUser($this -> userIdentity, $this -> password);
            $hashed = $this-> model -> hashBrown($this -> userIdentity, $this -> password);
            //this will return the id if the match is found between pass and email/uname
            $uID = $this-> model -> retrieveID($this -> userIdentity, $hashed);
            //use that id to get the username
            $uName = $this-> model -> retrieveName($uID, $hashed);

            $isAdmin = $uID === 1 && $uName === 'admin';

            $role = $isAdmin ? 'admin' : 'user';

            //create a session in conjuction with JWT 
            if($result) {
                $token = $this -> generateJWT($uID, $uName, $role);

            }

            return $result;
        }
    }

    private function userExists(){
        $empty = false;
        //if this returns true the user doesnt exist.
        if(!$this -> checkUserExists($this -> userIdentity)){
            $empty = true;
        }

        return $empty;
    }


    private function generateJWT($userId, $username, $role) {
        $config = include('../config/config.php');
        $key = $config['secretKey'];
        //$issuedAt = time();
        //$expirationTime = $issuedAt + 3600; // Token expiration time (e.g., 1 hour)
        $payload = array(
            'iss' => 'localhost', // Issuer
            'aud' => 'localhost', // Audience
            'exp' => time() + 10000, //10 minutes
            'data' => [
                'user' => $userId, // Subject (user ID)
                'name' => $username,
                'role' => $role, // User role
            ]

        );
        $jwt = JWT::encode($payload, $key, 'HS256');
        echo json_encode([
            'status' => 1,
            'token' => $jwt,
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

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {

    $user = json_decode(file_get_contents('php://input'));

    $logIn = new LogIn($user->userIdentity, $user->password);
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