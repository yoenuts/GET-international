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
                    if($checkpwd){
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return ['status' => 0, 'message' => 'Record was not found. Password GetUser'];
                }
                    
            }


        } catch(PDOException $e){
            return ['status' => 0, 'message' => 'Record was not Found. Get User error.'];
        }
        finally{
            $stmt = null;
        }

    }

    protected function hashBrown($userIdentity, $pwd) {
        try{
            $stmt = $this -> connect() -> prepare("SELECT user_pwd FROM users WHERE user_email = ? OR user_id = ?");

            $hashedPass = password_hash($pwd, PASSWORD_DEFAULT);

            if($stmt->execute(array($userIdentity, $userIdentity))){

                //store the result in a variable
                $pwdHashed = $stmt -> fetch(PDO::FETCH_ASSOC);

                if($pwdHashed){
                    $checkpwd = password_verify($pwd, $pwdHashed["user_pwd"]);
                    if($checkpwd){
                        return $pwdHashed['user_pwd'];
                    } else {
                        return null;
                    }
                } else {
                    return ['status' => 0, 'message' => 'hashed couldnt be retrieved'];
                }
            }

        } catch(PDOException $e){
            return ['status' => 0, 'message' => 'we ball'];
        }
            
    }

    //check if user exists in db
    protected function checkUserExists($uid){
        $stmt = $this -> connect() -> prepare("SELECT user_id FROM users WHERE user_email = ? OR user_name = ?");

        if($stmt->execute(array($uid, $uid))){

            if($stmt -> rowCount() > 0){
                $stmt = null;
                return true;
            }

        }

        return false;
    }
    
    //retrieve ID  for JWT Authentication, returning array
    protected function retrieveID($userIdentity, $pwd){
        $stmt = $this -> connect() -> prepare("SELECT user_id FROM users WHERE (user_email = ? OR user_name = ?) AND user_pwd = ?");
        
        if($stmt->execute(array($userIdentity,$userIdentity,$pwd))){
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            //vlose the statement
            $stmt = null;
            if ($result) {
                
                return $result['user_id'];
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
                return $result['user_name'];
            }

        } 

        return null;
    }


}