<?php
	header("Access-Control-Allow-Origin: *");	
	include('connect.php');
	
	class wine
	{
		public $wineId = "";
		public $wineName = "";
		public $wineType = "";
		public $wineRating = "";
		public $wineDesc = "";
	};
	
	class id
	{
		public $userId = "";
	};
	
	$obj = json_decode(file_get_contents('php://input'), true);
	
	//$toBeChecked = openssl_encrypt('jacob', $cipherMethod, $key);
	//$passToCheck = '123';
	
	$toBeChecked = openssl_encrypt($obj['username'], $cipherMethod, $key);
	$passToCheck = $obj['password'];
	
	
	$query = $db->prepare("SELECT USER_ID, USER_NAME, USER_PASSWORD FROM USERS WHERE USER_NAME=:uname");
	$userExists = $query->execute(array(":uname"=>$toBeChecked));

	if ($userExists == 1)
	{
		$row = $query->fetch(PDO::FETCH_ASSOC);

		$passFound = $row["USER_PASSWORD"];
		$idFound = $row["USER_ID"];

		
		if (password_verify($passToCheck, $passFound)) {
	
			$data = $db->prepare("SELECT * From WINE WHERE USER_ID=:uid");
			$data->execute(array(":uid"=>$idFound));
			
			$sendId = new id;
			$sendId->userId = $idFound;
			
			$wineArray = [];
			$idArray = [];
			
			for($x = 0; $tuple = $data->fetch(); $x++){
			
				$wineData = new wine;
				
				$wineData->wineId = $tuple["WINE_ID"];
				$wineData->wineName = $tuple["WINE_NAME"];
				$wineData->wineType = $tuple["WINE_TYPE"];
				$wineData->wineRating = $tuple["WINE_RATING"];
				$wineData->wineDesc = $tuple["WINE_DESC"];
				
				array_push($wineArray,$wineData);
			}
			
		array_push($idArray,$sendId);
		
		$data = array_merge($idArray, $wineArray);
		
		echo json_encode($data);
		}
	}else{
		echo "NotPassword";
	}
	
	
	
	
	
	
	
	
	/*$toBeChecked = "jacob";
	$passToCheck = "123";
	
	for($i = 0; $row = $query->fetch(); $i++){
	
		
		if($toBeChecked === $row["USER_NAME"])
		{
			$nameFound = $row["USER_NAME"];
			$passFound = $row["USER_PASSWORD"];
			$idFound = $row["USER_ID"];
		}
		
	}*/
?>