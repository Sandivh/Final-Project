<?php
	header("Access-Control-Allow-Origin: *");
	include('connect.php');
	
	class newWine
	{
		public $wineId = "";

	};
	
	$obj = json_decode(file_get_contents('php://input'), true);
	
	$name = $obj['wineName'];
	$type = $obj['wineType'];
	$rating = $obj['wineRating'];
	$desc = $obj['wineDesc'];
	$userId = $obj['userId'];


	$query = $db->prepare("INSERT INTO WINE (WINE_NAME, WINE_TYPE, WINE_RATING, WINE_DESC, USER_ID) VALUES(:name, :type, :rating, :desc, :userID)");
	$query->execute(array(":name"=>$name, ":type"=>$type, ":rating"=>$rating, ":desc"=>$desc, ":userID"=>$userId));
	
	
	$returnQuery = $db->prepare("SELECT WINE_ID FROM WINE WHERE WINE_NAME=:wName AND USER_ID=:uID");
	$returnQuery->execute(array(":wName"=>$name,":uID"=>$userId));
	
	$row = $returnQuery->fetch(PDO::FETCH_ASSOC);
	
	$returnWine = new newWine;
	
	$returnWine->wineId = $row["WINE_ID"];
	
	echo json_encode($returnWine);
	
?>