<?php
	header("Access-Control-Allow-Origin: *");
	include('connect.php');
	
	$obj = json_decode(file_get_contents('php://input'), true);
	
	$id = $obj['wineId'];

	$query = $db->prepare("DELETE FROM WINE WHERE WINE_ID=:id");
	$query->execute(array(":id"=>$id));
	
?>