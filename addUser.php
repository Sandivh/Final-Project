<?php
	header("Access-Control-Allow-Origin: *");
	include('connect.php');

	$obj = json_decode(file_get_contents('php://input'), true);
	
	$name = openssl_encrypt($obj['username'],$cipherMethod, $key);
	$password = $obj['password'];
	$passwordHashed = password_hash( $password, PASSWORD_DEFAULT);
	
	//$checkQuery = $db->prepare("SELECT USER_NAME FROM USERS WHERE USER_NAME=:uname");
	//$userExists = $checkQuery->execute(array(":uname"=>$name));
	
	//if($userExists == 0){
	
	$query = $db->prepare("INSERT INTO USERS (USER_NAME, USER_PASSWORD) VALUES(:name, :password)");
	$query->execute(array(":name"=>$name, ":password"=>$passwordHashed));
	//}
?>