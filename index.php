<html>
	<head>
		<title>
		Web-elements
		</title>
		
			</head>
	
	<body>
		<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
		<script type="text/javascript" type="text/javascript" src="login/script.js"></script>
		<script type="text/javascript" type="text/javascript" src="list/script.js"></script>
	
			
		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="login/style.css">
		<link rel="stylesheet" href="list/style.css">
		
		
		<?include('./connect.php'); ?>
		
		<a class="logo" href="./index.php"><i class="fa fa-home"></i>Home</a> 
			
	<?
	//include('./helper/helper.php'); 
	?>
			
		<?php include('./login/usercheck.php');?>
		<div id="logincontent"></div>
		
		
		
		<?if($loggedin=='true'){?>
		
			<div id="list"></div>	
				
			<?}?>		
</body>
</html>