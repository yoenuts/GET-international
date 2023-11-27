<?php
//model interacts with the database
include '../Database.php';

class signupmodel extends Database{

    protected function setUser($name, $email, $pwd){
        //var_dump($name, $email, $this->pwd);
        try{
            $stmt = $this -> connect() -> prepare("INSERT INTO users (user_name, user_email, user_pwd) VALUES(?,?,?)");

            $hashedPass = password_hash($pwd, PASSWORD_DEFAULT);

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
    protected function checkInfo($uName, $email){
        $stmt = $this -> connect() -> prepare("SELECT user_name, user_email FROM users WHERE user_name = :uName OR user_email = :email");

        $stmt -> bindParam(':uName', $uName, PDO::PARAM_STR);
        $stmt -> bindParam(':email', $email, PDO::PARAM_STR);

        $stmt -> execute();
        $resultCheck = false;
    
        if($stmt -> rowCount() > 0){
            $resultCheck = true;
        }

        return $resultCheck;
    }


    

}