<?php
//model interacts with the database
include '../Database.php';

class signupmodel extends Database{

    protected function setUser($name, $email, $pwd){
        //var_dump($name, $email, $this->pwd);
        try{
            $stmt = $this -> connect() -> prepare("INSERT INTO users (user_name, user_email, user_pwd) VALUES(?,?,?)");

            $hashedPass = password_hash($pwd, PASSWORD_DEFAULT);

            echo '<script>console.log("trying this")</script>';


            if($stmt->execute(array($name, $email, $hashedPass))){
                return ['status' => 1, 'message' => 'Record Succesfully Added.'];
            } else {
                return ['status' => 0, 'message' => 'Failed to create record. Statement Error.'];
            }
            

        } catch(PDOException $e){
            return ['status' => 0, 'message' => 'Failed to create record. Set User error'];
            
        } finally{
            $stmt = null;
        }

    }
    

    //check if user exists in db returning boolean
    protected function checkInfo($uid, $email){
        $stmt = $this -> connect() -> prepare("SELECT user_name, user_email FROM users WHERE user_name = ? AND user_email = ?");

        if($stmt->execute(array($uid, $email))){
            $stmt = null;
            //if this fails to execute for some reason, redirect them to an error page
            
            exit();
        } 


        $resultCheck = true;
    
        if($stmt -> rowCount() > 0){
            $resultCheck = false;
        }

        return $resultCheck;
    }


    

}