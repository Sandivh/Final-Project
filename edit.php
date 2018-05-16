<?php
	include('connect.php');
	
	$obj = json_decode(file_get_contents('php://input'), true);
	
	$newName = $obj['wineName'];
	$newType = $obj['wineType'];
	$newRating = $obj['wineRating'];
	$newDesc = $obj['winedesc'];
	$currentWineID = $obj['wineName'];


	$query = $db->prepare("UPDATE WINE SET WINE_NAME=:name, WINE_TYPE=:type, WINE_RATING=:rating, WINE_DESC=:desc WHERE WINE_ID=:id");
	$query->execute(array(":name"=>$newName, ":type"=>$newType, ":rating"=>$newRating, ":desc"=>$newDesc, ":id"=>$currentWineID));
	
	header("location: Test.php");

?>