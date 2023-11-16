<?php

class SignUpController extends SignUp {
    private $username;
    private $email;
    private $pwd;
    private $confirm;


    public function __construct($w,$x,$y,$z) {
        $this -> username = $w;
        $this -> email = $x;
        $this -> pwd = $y;
        $this -> confirm = $z;
    }

    public function signUpUser() {
        if($this -> checkInputs() == false){
            //echo 'Complete all Fields.';
            header("location:../main.php?error=emptyinput");
            exit();
        }
        if($this -> validUserID() == false){
            //echo 'Invalid Username.';
            header("location:../main.php?error=username");
            exit();
        }
        if($this -> validateEmail() == false){
            //echo 'Invalid Email.';
            header("location:../main.php?error=email");
            exit();
        }
        if($this -> validatePass() == false){
            //echo 'Passwords don't match.';
            header("location:../main.php?error=incorrectpassword");
            exit();
        }
        if($this -> userExists() == false){
            //echo 'Username or Email already exist.';
            header("location:../main.php?error=existinguser");
            exit();
        }

        $this -> setUser($this -> username, $this -> email, $this -> pwd);
    }

    //make sure all fields are filled

    private function checkInputs(){
        $invalid = false;

        if(empty($this->username) || empty($this->email) || empty($this->pwd) || empty($this->confirm)){
            $invalid = true;
        }

        return $invalid;
    }

    private function validUserID() {
        $invalid = false;

        if(!preg_match("/^[a-zA-Z0-9]*$/", $this->username)) {
            $invalid = true;
        }


        return $invalid;
    }

    private function validateEmail() {
        $invalid = false;
        if(!filter_var($this->email, FILTER_VALIDATE_EMAIL)){
            $invalid = true;
        }

    }

    private function validatePass() {
        $invalid = false;

        if($this-> pwd !== $this-> confirm){
            $invalid = true;
        }
    }


    private function userExists() {
        $invalid = false;

        if($this-> checkInfo($this -> username, $this -> email )){
            $invalid = true;
        }


        return $invalid;
    }


}