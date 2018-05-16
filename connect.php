<?php

	$iniParse = parse_ini_file("../../cellarInI.ini",true);

	$wineCellar = $iniParse['currentdb']['data'];

	$db_host	=$iniParse[$wineCellar]['server'];
	$db_user	=$iniParse[$wineCellar]['username'];
	$db_pass	=$iniParse[$wineCellar]['password'];
	$db_database	=$iniParse[$wineCellar]['database'];
	$key		=$iniParse[$wineCellar]['key'];
	$cipherMethod	=$iniParse[$wineCellar]['cipherMethod'];
	
	$db = new PDO('mysql:host='.$db_host.'; dbname='.$db_database,$db_user,$db_pass);

	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>