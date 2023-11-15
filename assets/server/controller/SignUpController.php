<?php

class SignUpController extends SignUp {
    private $username;
    private $email;
    private $pwd;
    private $confirm;


    //make sure all fields are filled

    private function checkInputs(){
        $empty = true;

        if(empty($this->username) || empty($this->email) || empty($this->pwd) || empty($this->confirm)){
            
        }
    }
}