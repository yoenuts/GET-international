<?php
include_once '../Database.php';

class LogInModel extends Database{
    
    protected function getUser($user, $pwd){

        //get a password from the database based on the user
        $stmt = $this -> connect() -> prepare("SELECT user_pwd FROM users WHERE user_email = ? OR user_id = ?");

        try{
            if($stmt->execute(array($user, $user))){

                //store the result in a variable
                $pwdHashed = $stmt -> fetch(PDO::FETCH_ASSOC);



                if($pwdHashed){
                    $checkpwd = password_verify($pwd, $pwdHashed["user_pwd"]);
                    echo 'getUser password checking';
                    if($checkpwd){
                        return ['status' => 1, 'message' => 'Record Sucessfully Found.'];
                    } else {
                        return ['status' => 0, 'message' => 'Password did not match.'];
                    }
                } else {
                    return ['status' => 1, 'message' => 'Record was not found.'];
                }
                    
            }


        } catch(PDOException $e){
            return ['status' => 0, 'message' => 'Record was not Found. Get User error.'];
        }
        finally{
            $stmt = null;
        }

    }

    //check if user exists in db
    protected function checkUserExists($uid){
        $stmt = $this -> connect() -> prepare("SELECT user_id FROM users WHERE user_email = ? OR user_name = ?");
        echo 'checked if user existed';

        if($stmt->execute(array($uid, $uid))){

            if($stmt -> rowCount() > 0){
                $resultCheck = false;
            }
            $stmt = null;
            echo 'user does exist lol';
            return true;
        }

        echo 'user doesnt even exist lol';
        return false;
    }
    
    //retrieve ID  for JWT Authentication, returning array
    protected function retrieveID($email, $pwd){
        $stmt = $this -> connect() -> prepare("SELECT user_id FROM users WHERE user_email = ? AND user_pwd = ?");

        if($stmt->execute(array($email,$pwd))){
            //fetch result
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            //vlose the statement
            $stmt = null;

            if ($result) {
                return $result['user_id'];
                echo 'retrieved id';
            }
        } 

        return null;
    }

    protected function retrieveName($id, $pwd){
        $stmt = $this -> connect() -> prepare("SELECT user_name FROM users WHERE user_id = ? AND user_pwd = ?");

        if($stmt->execute(array($id,$pwd))){
            //fetch result
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            //vlose the statement
            $stmt = null;

            if ($result) {
                return $result['user_id'];
                echo 'retrieved id';
            }
        } 

        return null;
    }


}