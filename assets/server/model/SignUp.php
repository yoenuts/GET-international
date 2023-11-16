<?php
//model interacts with the database

include_once './config/Database.php';

class SignUp extends Database{

    protected function setUser($name, $email, $pwd){
        try{
            $stmt = $this -> connect() -> prepare("INSERT INTO users (user_name, user_email, user_password) VALUES(?,?,?)");

            $hashedPass = password_hash($pwd, PASSWORD_DEFAULT);

            $stmt->execute(array($name, $email, $hashedPass));

        } catch(PDOException $e){
            header("location: ../main.php?error=stmtfailed");
            
        } finally{
            $stmt = null;
            exit();
        }
    }


    //check if user exists in db
    protected function checkInfo($uid, $email){
        $stmt = $this -> connect() -> prepare("SELECT user_name, user_email FROM users WHERE user_name = ? AND user_email = ?");

        if($stmt->execute(array($uid, $email))){
            $stmt = null;
            //if this fails to execute for some reason, redirect them to an error page
            header("location: ../main.php?error=stmtfailed");
            exit();
        } 


        $resultCheck = true;
    
        if($stmt -> rowCount() > 0){
            $resultCheck = false;
        }

        return $resultCheck;
    }


    

}