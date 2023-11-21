<?php

include_once '../model/signupmodel.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");


echo 'I hate cake so much!!!!!!!!!! real';

class SignUp extends signupmodel {
    private $username;
    private $email;
    private $pwd;
    private $confirm;
    private $model;

    //email

    public function __construct($w,$x,$y,$z) {
        $this -> username = $w;
        $this -> email = $x;
        $this -> pwd = $y;
        $this -> confirm = $z;
        $this->model = new signupmodel();
    }

    public function signUpUser() {  
        $valid = true; 
        
        if($this -> validUserName() || $this -> validateEmail() || $this -> validatePass() || $this -> validatePass() || $this -> userExists()) {
            $valid = false;
        }
        else {
            $result = $this -> model;
            $result -> setUser($this -> username, $this -> email, $this -> pwd);
            echo 'signupuserexecuted!!!';
            

        }

        return $valid;
        
    }

    private function validUserName() {
        $invalid = false;
        //receiving a json object, but the regex epects a string so have to decode it as a str
        $userNameValue = $this -> username;
        if(!preg_match("/^[a-zA-Z0-9]*$/", $userNameValue)) {
            $invalid = true;
            echo('Invalid Username.');
        }


        return $invalid;
    }

    private function validateEmail() {
        $invalid = false;
        if(!filter_var($this->email, FILTER_VALIDATE_EMAIL)){
            $invalid = true;
            echo('Invalid Email.');

        }
        return $invalid;
    }

    private function validatePass() {
        $invalid = false;

        if($this-> pwd !== $this-> confirm){
            $invalid = true;
            echo('Passwords do not match.');
        }
        return $invalid;

    }


    private function userExists() {
        $invalid = false;

        if($this-> checkInfo($this -> username, $this -> email )){
            $invalid = true;
            echo('User Exists. Sign in instead.');
        }


        return $invalid;
    }

    public function testing() {
        echo 'hi';
        echo 'hello' . $this -> username ;
        echo 'ice cream lover ' . $this -> pwd;
    }

}

$method = $_SERVER['REQUEST_METHOD'];

if($method === "POST") {
    //decode JSON here
    $user = json_decode(file_get_contents('php://input'));
    //print_r(json_encode($user));
    /*
    //$sql = "INSERT INTO users(user_id, user_name, user_email, user_pwd) VALUES (null, :name, :email, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':name', $user->name);
    $stmt->bindParam(':email', $user->email);
    $stmt->bindParam(':password', $user->password);
    */
    $signUp = new SignUp($user->name, $user->email, $user->password, $user->checkPass);
    $signUp -> testing();
    $response = $signUp->signUpUser();

    header('Content-Type: application/json');
    //print_r(json_encode($response));
    //$jsonRes = json_encode($response);
    if($response) {
        return json_encode(['status' => 1, 'message' => 'Record Sucessfully Created.']);
    }
    else {
        return json_encode(['status' => 0, 'message' => 'Failure to create record.']);
    }

}
/* 
else{
    $response = ['status' => 0, 'message' => 'Invalid request method (endpoint error)'];
}
*/

echo 'hi erlein from controller';



