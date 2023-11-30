<?php
include_once '../Database.php';

class articleModel extends Database{

    protected function setArticle($userID, $title, $file, $org) {
        echo 'setArticle ran';
        try{
            $stmt = $this -> connect() -> prepare("INSERT INTO submittedarticles (user_id, article_title, article_path, org_name) VALUES(?,?,?, ?)");

            $targetPath = '../files';
            $fileName = uniqid() . '_' . $userID;
            $targetPath = $targetPath . '/' . $fileName;

            move_uploaded_file($file['tmp_name'], $targetPath);

            if($stmt->execute(array($userID, $title, $targetPath, $org))){
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

    protected function checkArticle($title) {
        echo 'i checked the article';
        $stmt = $this -> connect() -> prepare("SELECT article_title FROM submittedarticles WHERE article_title = :title");

        $stmt -> bindParam(':title', $title, PDO::PARAM_STR);

        $stmt -> execute();
        $resultCheck = false;
    
        if($stmt -> rowCount() > 0){
            $stmt = null;
            $resultCheck = true;
        }

        return $resultCheck;
    }

    
}