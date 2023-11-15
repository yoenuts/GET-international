<?php
//model interacts with the database

include_once './config/Database.php';

class SignUp extends Database{

    protected function setUser($uid, $name, $email, $pwd){
        try{
            $stmt = $this -> connect() -> prepare("INSERT INTO newuser (user_uid, user_name, user_email, user_password) VALUES(?,?,?)");

            $hashedPass = password_hash($pwd, PASSWORD_DEFAULT);

            $stmt->execute(array($uid, $name, $email, $hashedPass));

        } catch(PDOException $e){
            header("location: ../main.php?error=stmtfailed");
            
        } finally{
            $stmt = null;
            exit();
        }
    }


    //check if user exists in db
    protected function checkInfo($uid, $email){
        $stmt = $this -> connect() -> prepare("SELECT user_id, user_email FROM newuser WHERE user_id = ? AND user_email = ?");

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